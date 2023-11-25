import { Request, Response } from "express";
import {
  addOrderUserInDB,
  creatUserInDB,
  deleteSigleUsersDB,
  getAllUsersDB,
  getSigleUsersDB,
  specificUserOrdersDB,
  totalOrderPriceIntoDB,
  updateUsersDB,
} from "./user.service";
import { z } from "zod";
import { UserValidationSchema } from "./user.validation";

export const creatUser = async (req: Request, res: Response) => {
  try {
    //zod validation

    const user = req.body;
    const zodvalidateData = UserValidationSchema.parse(user);
    const result = await creatUserInDB(zodvalidateData);
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
        err,
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
        err,
      },
    });
  }
};

export const getSigleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await getSigleUsersDB(userId);
    if (!result) {
      return res.status(404).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
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
        err,
      },
    });
  }
};
export const deleteSigleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await deleteSigleUsersDB(parseInt(userId));
    if (!result) {
      return res.status(404).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
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
        err,
      },
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const result = await updateUsersDB(userId, data);
    if (!result) {
      return res.status(404).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
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
        err,
      },
    });
  }
};
//bonus part
export const specificUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await specificUserOrdersDB(userId);
    if (!result) {
      return res.status(404).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
        },
      });
    }
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
        err,
      },
    });
  }
};

export const orderUserDataAdd = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const result = await addOrderUserInDB(userId, data);
    res.status(200).json({
      success: true,
      message: "Order ADDED successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order does not added",
      error: {
        code: 404,
        description: "Order does not added",
        error,
      },
    });
  }
};

export const ordersSum = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await totalOrderPriceIntoDB(parseInt(userId));

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
        err,
      },
    });
  }
};
