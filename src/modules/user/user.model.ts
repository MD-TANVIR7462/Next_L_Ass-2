import { Schema, model, connect } from "mongoose";
import { Address, FullName, Orders, User } from "./user.interface";

const FUllNameShema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const AddressShema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema = new Schema<User>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  fullName: { type: FUllNameShema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: { type: AddressShema, required: true },
  orders: { type: [OrderSchema], required: true },
});
