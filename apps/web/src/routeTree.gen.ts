/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as IndexRouteImport } from './routes/index'
import { Route as PublicProjectProjectIdRouteImport } from './routes/public-project.$projectId'
import { Route as DashboardSettingsRouteImport } from './routes/dashboard/settings'
import { Route as DashboardSplatRouteImport } from './routes/dashboard/$'
import { Route as AuthSignUpRouteImport } from './routes/auth/sign-up'
import { Route as AuthSignInRouteImport } from './routes/auth/sign-in'
import { Route as DashboardWorkspaceCreateRouteImport } from './routes/dashboard/workspace/create'
import { Route as DashboardWorkspaceWorkspaceIdRouteImport } from './routes/dashboard/workspace/$workspaceId'
import { Route as DashboardSettingsAppearanceRouteImport } from './routes/dashboard/settings/appearance'
import { Route as DashboardWorkspaceWorkspaceIdIndexRouteImport } from './routes/dashboard/workspace/$workspaceId/index'
import { Route as DashboardWorkspaceWorkspaceIdSettingsRouteImport } from './routes/dashboard/workspace/$workspaceId/settings'
import { Route as DashboardWorkspaceWorkspaceIdSearchRouteImport } from './routes/dashboard/workspace/$workspaceId/search'
import { Route as DashboardWorkspaceWorkspaceIdMembersRouteImport } from './routes/dashboard/workspace/$workspaceId/members'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRouteImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/index'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRouteImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/settings'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRouteImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/board'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRouteImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/backlog'
import { Route as DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRouteImport } from './routes/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId_'

const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const PublicProjectProjectIdRoute = PublicProjectProjectIdRouteImport.update({
  id: '/public-project/$projectId',
  path: '/public-project/$projectId',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardSettingsRoute = DashboardSettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => DashboardRoute,
} as any)
const DashboardSplatRoute = DashboardSplatRouteImport.update({
  id: '/$',
  path: '/$',
  getParentRoute: () => DashboardRoute,
} as any)
const AuthSignUpRoute = AuthSignUpRouteImport.update({
  id: '/auth/sign-up',
  path: '/auth/sign-up',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthSignInRoute = AuthSignInRouteImport.update({
  id: '/auth/sign-in',
  path: '/auth/sign-in',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardWorkspaceCreateRoute =
  DashboardWorkspaceCreateRouteImport.update({
    id: '/workspace/create',
    path: '/workspace/create',
    getParentRoute: () => DashboardRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdRoute =
  DashboardWorkspaceWorkspaceIdRouteImport.update({
    id: '/workspace/$workspaceId',
    path: '/workspace/$workspaceId',
    getParentRoute: () => DashboardRoute,
  } as any)
const DashboardSettingsAppearanceRoute =
  DashboardSettingsAppearanceRouteImport.update({
    id: '/appearance',
    path: '/appearance',
    getParentRoute: () => DashboardSettingsRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdIndexRoute =
  DashboardWorkspaceWorkspaceIdIndexRouteImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdSettingsRoute =
  DashboardWorkspaceWorkspaceIdSettingsRouteImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdSearchRoute =
  DashboardWorkspaceWorkspaceIdSearchRouteImport.update({
    id: '/search',
    path: '/search',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdMembersRoute =
  DashboardWorkspaceWorkspaceIdMembersRouteImport.update({
    id: '/members',
    path: '/members',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRouteImport.update({
    id: '/project/$projectId/',
    path: '/project/$projectId/',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRouteImport.update({
    id: '/project/$projectId/settings',
    path: '/project/$projectId/settings',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRouteImport.update({
    id: '/project/$projectId/board',
    path: '/project/$projectId/board',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRouteImport.update({
    id: '/project/$projectId/backlog',
    path: '/project/$projectId/backlog',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)
const DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute =
  DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRouteImport.update({
    id: '/project/$projectId/task/$taskId_',
    path: '/project/$projectId/task/$taskId',
    getParentRoute: () => DashboardWorkspaceWorkspaceIdRoute,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/$': typeof DashboardSplatRoute
  '/dashboard/settings': typeof DashboardSettingsRouteWithChildren
  '/public-project/$projectId': typeof PublicProjectProjectIdRoute
  '/dashboard/settings/appearance': typeof DashboardSettingsAppearanceRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  '/dashboard/workspace/create': typeof DashboardWorkspaceCreateRoute
  '/dashboard/workspace/$workspaceId/members': typeof DashboardWorkspaceWorkspaceIdMembersRoute
  '/dashboard/workspace/$workspaceId/search': typeof DashboardWorkspaceWorkspaceIdSearchRoute
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRoute
  '/dashboard/workspace/$workspaceId/': typeof DashboardWorkspaceWorkspaceIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/backlog': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/settings': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute
  '/dashboard/workspace/$workspaceId/project/$projectId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/$': typeof DashboardSplatRoute
  '/dashboard/settings': typeof DashboardSettingsRouteWithChildren
  '/public-project/$projectId': typeof PublicProjectProjectIdRoute
  '/dashboard/settings/appearance': typeof DashboardSettingsAppearanceRoute
  '/dashboard/workspace/create': typeof DashboardWorkspaceCreateRoute
  '/dashboard/workspace/$workspaceId/members': typeof DashboardWorkspaceWorkspaceIdMembersRoute
  '/dashboard/workspace/$workspaceId/search': typeof DashboardWorkspaceWorkspaceIdSearchRoute
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/backlog': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/settings': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute
  '/dashboard/workspace/$workspaceId/project/$projectId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/auth/sign-in': typeof AuthSignInRoute
  '/auth/sign-up': typeof AuthSignUpRoute
  '/dashboard/$': typeof DashboardSplatRoute
  '/dashboard/settings': typeof DashboardSettingsRouteWithChildren
  '/public-project/$projectId': typeof PublicProjectProjectIdRoute
  '/dashboard/settings/appearance': typeof DashboardSettingsAppearanceRoute
  '/dashboard/workspace/$workspaceId': typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  '/dashboard/workspace/create': typeof DashboardWorkspaceCreateRoute
  '/dashboard/workspace/$workspaceId/members': typeof DashboardWorkspaceWorkspaceIdMembersRoute
  '/dashboard/workspace/$workspaceId/search': typeof DashboardWorkspaceWorkspaceIdSearchRoute
  '/dashboard/workspace/$workspaceId/settings': typeof DashboardWorkspaceWorkspaceIdSettingsRoute
  '/dashboard/workspace/$workspaceId/': typeof DashboardWorkspaceWorkspaceIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/backlog': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/board': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/settings': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute
  '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId_': typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/$'
    | '/dashboard/settings'
    | '/public-project/$projectId'
    | '/dashboard/settings/appearance'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/create'
    | '/dashboard/workspace/$workspaceId/members'
    | '/dashboard/workspace/$workspaceId/search'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId/'
    | '/dashboard/workspace/$workspaceId/project/$projectId/backlog'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/settings'
    | '/dashboard/workspace/$workspaceId/project/$projectId'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/$'
    | '/dashboard/settings'
    | '/public-project/$projectId'
    | '/dashboard/settings/appearance'
    | '/dashboard/workspace/create'
    | '/dashboard/workspace/$workspaceId/members'
    | '/dashboard/workspace/$workspaceId/search'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/$workspaceId/project/$projectId/backlog'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/settings'
    | '/dashboard/workspace/$workspaceId/project/$projectId'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/auth/sign-in'
    | '/auth/sign-up'
    | '/dashboard/$'
    | '/dashboard/settings'
    | '/public-project/$projectId'
    | '/dashboard/settings/appearance'
    | '/dashboard/workspace/$workspaceId'
    | '/dashboard/workspace/create'
    | '/dashboard/workspace/$workspaceId/members'
    | '/dashboard/workspace/$workspaceId/search'
    | '/dashboard/workspace/$workspaceId/settings'
    | '/dashboard/workspace/$workspaceId/'
    | '/dashboard/workspace/$workspaceId/project/$projectId/backlog'
    | '/dashboard/workspace/$workspaceId/project/$projectId/board'
    | '/dashboard/workspace/$workspaceId/project/$projectId/settings'
    | '/dashboard/workspace/$workspaceId/project/$projectId/'
    | '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId_'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  AuthSignInRoute: typeof AuthSignInRoute
  AuthSignUpRoute: typeof AuthSignUpRoute
  PublicProjectProjectIdRoute: typeof PublicProjectProjectIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/public-project/$projectId': {
      id: '/public-project/$projectId'
      path: '/public-project/$projectId'
      fullPath: '/public-project/$projectId'
      preLoaderRoute: typeof PublicProjectProjectIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/settings': {
      id: '/dashboard/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/$': {
      id: '/dashboard/$'
      path: '/$'
      fullPath: '/dashboard/$'
      preLoaderRoute: typeof DashboardSplatRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/auth/sign-up': {
      id: '/auth/sign-up'
      path: '/auth/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth/sign-in': {
      id: '/auth/sign-in'
      path: '/auth/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/workspace/create': {
      id: '/dashboard/workspace/create'
      path: '/workspace/create'
      fullPath: '/dashboard/workspace/create'
      preLoaderRoute: typeof DashboardWorkspaceCreateRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/workspace/$workspaceId': {
      id: '/dashboard/workspace/$workspaceId'
      path: '/workspace/$workspaceId'
      fullPath: '/dashboard/workspace/$workspaceId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/settings/appearance': {
      id: '/dashboard/settings/appearance'
      path: '/appearance'
      fullPath: '/dashboard/settings/appearance'
      preLoaderRoute: typeof DashboardSettingsAppearanceRouteImport
      parentRoute: typeof DashboardSettingsRoute
    }
    '/dashboard/workspace/$workspaceId/': {
      id: '/dashboard/workspace/$workspaceId/'
      path: '/'
      fullPath: '/dashboard/workspace/$workspaceId/'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdIndexRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/settings': {
      id: '/dashboard/workspace/$workspaceId/settings'
      path: '/settings'
      fullPath: '/dashboard/workspace/$workspaceId/settings'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdSettingsRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/search': {
      id: '/dashboard/workspace/$workspaceId/search'
      path: '/search'
      fullPath: '/dashboard/workspace/$workspaceId/search'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdSearchRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/members': {
      id: '/dashboard/workspace/$workspaceId/members'
      path: '/members'
      fullPath: '/dashboard/workspace/$workspaceId/members'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdMembersRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/'
      path: '/project/$projectId'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/settings': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/settings'
      path: '/project/$projectId/settings'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/settings'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/board': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/board'
      path: '/project/$projectId/board'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/board'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/backlog': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/backlog'
      path: '/project/$projectId/backlog'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/backlog'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
    '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId_': {
      id: '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId_'
      path: '/project/$projectId/task/$taskId'
      fullPath: '/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId'
      preLoaderRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRouteImport
      parentRoute: typeof DashboardWorkspaceWorkspaceIdRoute
    }
  }
}

interface DashboardSettingsRouteChildren {
  DashboardSettingsAppearanceRoute: typeof DashboardSettingsAppearanceRoute
}

const DashboardSettingsRouteChildren: DashboardSettingsRouteChildren = {
  DashboardSettingsAppearanceRoute: DashboardSettingsAppearanceRoute,
}

const DashboardSettingsRouteWithChildren =
  DashboardSettingsRoute._addFileChildren(DashboardSettingsRouteChildren)

interface DashboardWorkspaceWorkspaceIdRouteChildren {
  DashboardWorkspaceWorkspaceIdMembersRoute: typeof DashboardWorkspaceWorkspaceIdMembersRoute
  DashboardWorkspaceWorkspaceIdSearchRoute: typeof DashboardWorkspaceWorkspaceIdSearchRoute
  DashboardWorkspaceWorkspaceIdSettingsRoute: typeof DashboardWorkspaceWorkspaceIdSettingsRoute
  DashboardWorkspaceWorkspaceIdIndexRoute: typeof DashboardWorkspaceWorkspaceIdIndexRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute
  DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute: typeof DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute
}

const DashboardWorkspaceWorkspaceIdRouteChildren: DashboardWorkspaceWorkspaceIdRouteChildren =
  {
    DashboardWorkspaceWorkspaceIdMembersRoute:
      DashboardWorkspaceWorkspaceIdMembersRoute,
    DashboardWorkspaceWorkspaceIdSearchRoute:
      DashboardWorkspaceWorkspaceIdSearchRoute,
    DashboardWorkspaceWorkspaceIdSettingsRoute:
      DashboardWorkspaceWorkspaceIdSettingsRoute,
    DashboardWorkspaceWorkspaceIdIndexRoute:
      DashboardWorkspaceWorkspaceIdIndexRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdBacklogRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdBoardRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdSettingsRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdIndexRoute,
    DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute:
      DashboardWorkspaceWorkspaceIdProjectProjectIdTaskTaskIdRoute,
  }

const DashboardWorkspaceWorkspaceIdRouteWithChildren =
  DashboardWorkspaceWorkspaceIdRoute._addFileChildren(
    DashboardWorkspaceWorkspaceIdRouteChildren,
  )

interface DashboardRouteChildren {
  DashboardSplatRoute: typeof DashboardSplatRoute
  DashboardSettingsRoute: typeof DashboardSettingsRouteWithChildren
  DashboardWorkspaceWorkspaceIdRoute: typeof DashboardWorkspaceWorkspaceIdRouteWithChildren
  DashboardWorkspaceCreateRoute: typeof DashboardWorkspaceCreateRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardSplatRoute: DashboardSplatRoute,
  DashboardSettingsRoute: DashboardSettingsRouteWithChildren,
  DashboardWorkspaceWorkspaceIdRoute:
    DashboardWorkspaceWorkspaceIdRouteWithChildren,
  DashboardWorkspaceCreateRoute: DashboardWorkspaceCreateRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
  AuthSignInRoute: AuthSignInRoute,
  AuthSignUpRoute: AuthSignUpRoute,
  PublicProjectProjectIdRoute: PublicProjectProjectIdRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
