import { Request, Response } from "express";
import {
  addOrderUserInDB,
  creatUserInDB,
  deleteSigleUsersDB,
  getAllUsersDB,
  getSigleUsersDB,
  ordersPriceSumDB,
  specificUserOrdersDB,
  updateUsersDB,
} from "./user.service";
import { z } from "zod";



export const creatUser = async (req: Request, res: Response) => {
  try {

    const UserValidationShema = z.object({
      
    })
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
      message: "orders not found",
      error: {
        code: 404,
        description: "orders not found",
      },
    });
  }
};

export const orderUserDataAdd = async (req: Request, res: Response) => {
  try {
  const {userId}=req.params
  const data = req.body;
  const result= await addOrderUserInDB(userId,data)
  res.status(200).json({
    success: true,
    message: "Order ADDED successfully!",
    data: result,
  });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Order does not added',
      error: {
        code: 404,
        description: "Order does not added",
      },
    });
  }
};


export const ordersSum = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await ordersPriceSumDB(userId);
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      succcess: false,
      message: "price not calculated ",
      error: {
        code: 404,
        description: "price not calculated",
      },
    });
  }
};
