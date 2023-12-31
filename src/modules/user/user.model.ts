import { Schema, model, connect } from "mongoose";
import { Address, FullName, Orders, User } from "./user.interface";
import bcrypt from "bcrypt";
require("dotenv").config();

const FullNameSchema = new Schema<FullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First Name is required"],
    maxlength: [25, "First Name must be less than 25 characters"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
  },
});

const AddressSchema = new Schema<Address>({
  street: { type: String, required: [true, "Street is required"] },
  city: { type: String, required: [true, "City is required"] },
  country: { type: String, required: [true, "Country is required"] },
});

const OrderSchema = new Schema<Orders>({
  productName: { type: String, required: [true, "Product Name is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});

const UserSchema = new Schema<User>({
  userId: {
    type: Number,
    required: [true, "User ID is required"],
    unique: true,
  },
  username: { type: String, required: [true, "Username is required"] },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  fullName: { type: FullNameSchema, required: [true, "Full Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  isActive: { type: Boolean, required: [true, "isActive is required"] },
  hobbies: { type: [String], required: [true, "Hobbies are required"] },
  address: { type: AddressSchema, required: [true, "Address is required"] },
  orders: { type: [OrderSchema], required: [true, "Orders are required"] },
});

//pre
UserSchema.pre("save", async function (next) {
  // console.log(this,"pre hook");
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(process.env.BCRYPT_SALT)
  );
  next();
});

//post hook
UserSchema.post("save", function () {
  console.log(this, "post hook");
});

// model
export const UserModel = model<User>("User", UserSchema);
