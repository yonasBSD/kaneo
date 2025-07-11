import useTheme from "@/components/providers/theme-provider/hooks/use-theme";
import CreateProjectModal from "@/components/shared/modals/create-project-modal";
import CreateTaskModal from "@/components/shared/modals/create-task-modal";
import CreateWorkspaceModal from "@/components/shared/modals/create-workspace-modal";
import useGlobalSearch from "@/hooks/queries/search/use-global-search";
import { cn } from "@/lib/cn";
import useProjectStore from "@/store/project";
import useWorkspaceStore from "@/store/workspace";
import { useNavigate } from "@tanstack/react-router";
import { Command } from "cmdk";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  CommandIcon,
  FileText,
  FolderOpen,
  Globe,
  Hash,
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Monitor,
  Moon,
  Plus,
  Search,
  Settings,
  Sun,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import CommandGroup from "./command-group";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [isCreateWorkspaceOpen, setIsCreateWorkspaceOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isGlobalSearch, setIsGlobalSearch] = useState(true);
  const [pendingAction, setPendingAction] = useState<{
    type: "task" | "project" | "workspace";
    status?: string;
  } | null>(null);
  const { workspace } = useWorkspaceStore();
  const { project } = useProjectStore();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const searchQuery = useGlobalSearch({
    q: searchValue,
    workspaceId: isGlobalSearch ? undefined : workspace?.id,
    limit: 10,
  });

  const searchResults = searchQuery.data?.results || [];
  const hasSearchResults = searchValue.length > 2 && searchResults.length > 0;

  const commandItemStyles = cn(
    "px-3 py-2 rounded-lg cursor-pointer flex items-center gap-3",
    "text-sm text-zinc-900 dark:text-zinc-100",
    "aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800/50",
    "transition-colors duration-100",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!open && pendingAction) {
      setOpen(false);
      timeout = setTimeout(() => {
        switch (pendingAction.type) {
          case "task":
            setIsCreateTaskOpen(true);
            break;
          case "project":
            setIsCreateProjectOpen(true);
            break;
          case "workspace":
            setIsCreateWorkspaceOpen(true);
            break;
        }
        setPendingAction(null);
      }, 150);
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }
  }, [open, pendingAction]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (!open) {
      setSearchValue("");
      setIsGlobalSearch(true);
    }
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.1 }}
              className={cn(
                "fixed top-[20vh] left-1/2 -translate-x-1/2 max-w-[640px] w-full p-4 rounded-xl z-50",
                "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
                "shadow-2xl",
              )}
            >
              <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                shouldFilter={false}
                className={cn(
                  "fixed top-[20vh] left-1/2 -translate-x-1/2 max-w-[640px] w-full p-4 rounded-xl z-50",
                  "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
                  "shadow-2xl",
                  "data-[state=open]:animate-in",
                  "data-[state=closed]:animate-out",
                  "data-[state=closed]:fade-out-0",
                  "data-[state=open]:fade-in-0",
                  "data-[state=closed]:zoom-out-95",
                  "data-[state=open]:zoom-in-95",
                  "data-[state=closed]:slide-out-to-left-1/2",
                  "data-[state=closed]:slide-out-to-top-[48%]",
                  "data-[state=open]:slide-in-from-left-1/2",
                  "data-[state=open]:slide-in-from-top-[48%]",
                )}
              >
                <div className="px-3 pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-4 mb-3">
                    <Search className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                    <Command.Input
                      placeholder="Type a command or search..."
                      value={searchValue}
                      onValueChange={setSearchValue}
                      className={cn(
                        "w-full outline-none bg-transparent",
                        "text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
                      )}
                    />
                    <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                      <CommandIcon className="w-3 h-3" />K
                    </kbd>
                  </div>

                  {/* Search scope toggle */}
                  {searchValue.length > 2 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsGlobalSearch(!isGlobalSearch)}
                          className={cn(
                            "flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-colors",
                            isGlobalSearch
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700",
                          )}
                        >
                          {isGlobalSearch ? (
                            <Globe className="w-3 h-3" />
                          ) : (
                            <Users className="w-3 h-3" />
                          )}
                          {isGlobalSearch
                            ? "All workspaces"
                            : workspace?.name || "Current workspace"}
                        </button>
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {searchResults.length} result
                        {searchResults.length !== 1 ? "s" : ""}
                      </div>
                    </div>
                  )}
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto px-3">
                  <Command.Empty className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    No results found.
                  </Command.Empty>

                  {/* Search Results */}
                  {hasSearchResults && (
                    <CommandGroup heading="Search Results">
                      {searchResults.map((result) => {
                        const getIcon = () => {
                          switch (result.type) {
                            case "task":
                              return <Hash className="w-4 h-4" />;
                            case "project":
                              return <FolderOpen className="w-4 h-4" />;
                            case "workspace":
                              return <Users className="w-4 h-4" />;
                            case "comment":
                              return <MessageCircle className="w-4 h-4" />;
                            case "activity":
                              return <FileText className="w-4 h-4" />;
                            default:
                              return <Search className="w-4 h-4" />;
                          }
                        };

                        const handleSelect = () => {
                          setOpen(false);
                          if (
                            result.type === "task" &&
                            result.projectId &&
                            result.workspaceId
                          ) {
                            navigate({
                              to: "/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId",
                              params: {
                                workspaceId: result.workspaceId,
                                projectId: result.projectId,
                                taskId: result.id,
                              },
                            });
                          } else if (
                            result.type === "project" &&
                            result.workspaceId
                          ) {
                            navigate({
                              to: "/dashboard/workspace/$workspaceId/project/$projectId/board",
                              params: {
                                workspaceId: result.workspaceId,
                                projectId: result.id,
                              },
                            });
                          } else if (result.type === "workspace") {
                            navigate({
                              to: "/dashboard/workspace/$workspaceId",
                              params: {
                                workspaceId: result.id,
                              },
                            });
                          }
                        };

                        return (
                          <Command.Item
                            key={result.id}
                            onSelect={handleSelect}
                            className={commandItemStyles}
                          >
                            {getIcon()}
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm truncate">
                                {result.title}
                                {result.taskNumber && ` #${result.taskNumber}`}
                              </div>
                              {result.content && (
                                <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                  {result.content}
                                </div>
                              )}
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">
                              {result.projectName && (
                                <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                                  {result.projectName}
                                </span>
                              )}
                            </div>
                          </Command.Item>
                        );
                      })}
                    </CommandGroup>
                  )}

                  {/* Regular Commands - only show when no search or no search results */}
                  {!hasSearchResults && (
                    <>
                      <CommandGroup heading="Tasks">
                        <Command.Item
                          onSelect={() => {
                            setOpen(false);
                            setPendingAction({ type: "task", status: "to-do" });
                          }}
                          disabled={!project}
                          className={commandItemStyles}
                        >
                          <Plus className="w-4 h-4" />
                          Create new task
                          {!project && (
                            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">
                              Select a project first
                            </span>
                          )}
                        </Command.Item>
                      </CommandGroup>

                      <CommandGroup heading="Projects" className="mt-4">
                        <Command.Item
                          onSelect={() => {
                            setOpen(false);
                            setPendingAction({ type: "project" });
                          }}
                          disabled={!workspace}
                          className={commandItemStyles}
                        >
                          <Plus className="w-4 h-4" />
                          Create new project
                          {!workspace && (
                            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">
                              Select a workspace first
                            </span>
                          )}
                        </Command.Item>
                      </CommandGroup>

                      <CommandGroup heading="Project" className="mt-4">
                        {project && (
                          <Command.Item
                            onSelect={() => {
                              navigate({
                                to: "/dashboard/workspace/$workspaceId/project/$projectId/board",
                                params: {
                                  workspaceId: workspace?.id ?? "",
                                  projectId: project.id,
                                },
                              });
                              setOpen(false);
                            }}
                            className={commandItemStyles}
                          >
                            <LayoutDashboard className="w-4 h-4" />
                            Go to Board
                          </Command.Item>
                        )}

                        {project && (
                          <Command.Item
                            className={commandItemStyles}
                            onSelect={() => {
                              navigate({
                                to: "/dashboard/workspace/$workspaceId/project/$projectId/backlog",
                                params: {
                                  workspaceId: workspace?.id ?? "",
                                  projectId: project?.id ?? "",
                                },
                              });
                              setOpen(false);
                            }}
                          >
                            <ListTodo className="w-4 h-4" />
                            Go to Backlog
                          </Command.Item>
                        )}

                        {project && (
                          <Command.Item
                            onSelect={() => {
                              setOpen(false);
                              navigate({
                                to: "/dashboard/workspace/$workspaceId/project/$projectId/settings",
                                params: {
                                  workspaceId: workspace?.id ?? "",
                                  projectId: project.id,
                                },
                              });
                            }}
                            className={commandItemStyles}
                          >
                            <Settings className="w-4 h-4" />
                            Project settings
                          </Command.Item>
                        )}
                      </CommandGroup>

                      <CommandGroup heading="Workspace" className="mt-4">
                        <Command.Item
                          onSelect={() => {
                            setOpen(false);
                            setPendingAction({ type: "workspace" });
                          }}
                          className={commandItemStyles}
                        >
                          <Plus className="w-4 h-4" />
                          Create new workspace
                        </Command.Item>
                      </CommandGroup>

                      <CommandGroup heading="Appearance" className="mt-4 mb-2">
                        <Command.Item
                          onSelect={() => {
                            setTheme("light");
                            setOpen(false);
                          }}
                          className={commandItemStyles}
                        >
                          <Sun className="w-4 h-4" />
                          Light mode
                          {theme === "light" && (
                            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">
                              ✓
                            </span>
                          )}
                        </Command.Item>
                        <Command.Item
                          onSelect={() => {
                            setTheme("dark");
                            setOpen(false);
                          }}
                          className={commandItemStyles}
                        >
                          <Moon className="w-4 h-4" />
                          Dark mode
                          {theme === "dark" && (
                            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">
                              ✓
                            </span>
                          )}
                        </Command.Item>
                        <Command.Item
                          onSelect={() => {
                            setTheme("system");
                            setOpen(false);
                          }}
                          className={commandItemStyles}
                        >
                          <Monitor className="w-4 h-4" />
                          System mode
                          {theme === "system" && (
                            <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">
                              ✓
                            </span>
                          )}
                        </Command.Item>
                      </CommandGroup>
                    </>
                  )}
                </Command.List>
              </Command.Dialog>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CreateProjectModal
        open={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
      />
      <CreateTaskModal
        open={isCreateTaskOpen}
        onClose={() => setIsCreateTaskOpen(false)}
        status="to-do"
      />
      <CreateWorkspaceModal
        open={isCreateWorkspaceOpen}
        onClose={() => setIsCreateWorkspaceOpen(false)}
      />
    </>
  );
}
