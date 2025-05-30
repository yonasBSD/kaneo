import { eq } from "drizzle-orm";
import db from "../../database";
import { workspaceUserTable } from "../../database/schema";

async function updateWorkspaceUser(userEmail: string, status: string) {
  const [updatedWorkspaceUser] = await db
    .update(workspaceUserTable)
    .set({ status })
    .where(eq(workspaceUserTable.userEmail, userEmail))
    .returning();

  return updatedWorkspaceUser;
}

export default updateWorkspaceUser;
