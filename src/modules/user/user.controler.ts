import { Request, Response } from "express";
import { creatUserInDB } from "./user.service";

export const creatUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body.user; //post man give data in a user object
    console.log(newUser);
    const result = await creatUserInDB(newUser);
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
