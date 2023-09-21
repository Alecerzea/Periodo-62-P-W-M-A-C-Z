import Role from "../roles/model";
import User from "../docente/model";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "docente" }).save(),
      new Role({ name: "admin" }).save()
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
