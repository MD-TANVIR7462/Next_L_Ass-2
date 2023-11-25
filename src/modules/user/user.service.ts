import { User } from "./user.interface";
import { UserModel } from "./user.model";

export const creatUserInDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const getAllUsersDB = async ()=>{
  const result = await UserModel.find()
  return result;
}

export const getSigleUsersDB = async (id:string)=>{
  const result = await UserModel.findOne({userId:{$eq:id}})
  return result
}