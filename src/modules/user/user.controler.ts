import { Request, Response } from "express";
import { creatUserInDB, getAllUsersDB, getSigleUsersDB } from "./user.service";

export const creatUser = async (req: Request, res: Response) => {
  try {
    const user = req.body; //post man give data in a user object
    const result = await creatUserInDB(user);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succcess: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found",
      },
    });
  }
};
export const getAllusers = async(req:Request,res:Response)=>{
  try{
    const result = await getAllUsersDB()
    res.status(200).json({
      success: true,
      message: "User's are retrived successfully!",
      data: result,
    });
  }
  catch (err) {
    res.status(500).json({
      succcess: false,
      message: "Users not found",
      error: {
        code: 404,
        description: "Users not found",
      },
    });
  }
}

export  const getSigleUser = async(req:Request,res:Response)=>{
  try{
    const {userId}=req.params
    const result = await getSigleUsersDB(userId)
    res.status(200).json({
      success: true,
      message: "User's are retrived successfully!",
      data: result,
    })
  }
  catch (err) {
    res.status(500).json({
      succcess: false,
      message: "Single User not found",
      error: {
        code: 404,
        description: "Sigle Users not found",
      },
    });
  }

}