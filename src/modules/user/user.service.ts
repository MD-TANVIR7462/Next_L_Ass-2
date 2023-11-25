import { Orders, User } from "./user.interface";
import { UserModel } from "./user.model";

//main marks
export const creatUserInDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const getAllUsersDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const getSigleUsersDB = async (id: string) => {
  const result = await UserModel.findOne({ userId: { $eq: id } });
  return result;
};
export const deleteSigleUsersDB = async (id: number) => {
  console.log(typeof(id));
  const result = await UserModel.deleteOne({ userId: { $eq: id } });
  return result;
};
export const updateUsersDB = async (id: string, data: Partial<User>) => {
  const result = await UserModel.updateOne(
    { userId: { $eq: id } },
    { $set: data }
  );
  return result;
};

//bonus marks
export const specificUserOrdersDB = async (id: string) => {
  const userOrders = await UserModel.findOne(
    { userId: { $eq: id } },
    { _id: 0, orders: 1 }
  );
  return userOrders;
};

export const addOrderUserInDB = async (id: string, data: Orders) => {
  const result = await UserModel.updateOne(
    { userId: id },
    { $push: { orders: data } }
  );
  return result;
};

export const ordersPriceSumDB = async (id: string) => {
  const result = await UserModel.aggregate([
    { $match: { userId: { $eq: id } } },
    { $unwind: "$orders" },
    {
      $group: {
        _id: "$orders",
        totalPrice: {
          $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
        },
      },
    },
    { $project: { _id: 0, totalPrice: 1 } },
  ]);

  return result;
};
export const totalOrderPriceIntoDB = async (userId: number) => {
  const orderData = await UserModel.aggregate([
    { $match: { userId } },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: {
          $sum: {
            $multiply: ['$orders.price', '$orders.quantity'],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]);
  if (orderData.length === 0) {
    return null;
  }
  return orderData;
};