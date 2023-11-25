import { Request, Response } from "express";
import {
  creatUserInDB,
  deleteSigleUsersDB,
  getAllUsersDB,
  getSigleUsersDB,
  specificUserOrdersDB,
  updateUsersDB,
} from "./user.service";

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
export const getAllusers = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsersDB();
    res.status(200).json({
      success: true,
      message: "User's fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succcess: false,
      message: "Users not found",
      error: {
        code: 404,
        description: "Users not found",
      },
    });
  }
};

export const getSigleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await getSigleUsersDB(userId);
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
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
export const deleteSigleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await deleteSigleUsersDB(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      succcess: false,
      message: "User not deleted",
      error: {
        code: 404,
        description: "Users not deleted",
      },
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const result = await updateUsersDB(userId, data);
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succcess: false,
      message: "User not updated",
      error: {
        code: 404,
        description: "User not updated",
      },
    });
  }
};
//bonus part
export const specificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await specificUserOrdersDB(userId);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
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
