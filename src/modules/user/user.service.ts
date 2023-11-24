import { User } from "./user.interface";
import { UserModel } from "./user.model";

export const creatUserInDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};
