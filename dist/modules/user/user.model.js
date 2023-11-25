"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv").config();
const FullNameSchema = new mongoose_1.Schema({
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
const AddressSchema = new mongoose_1.Schema({
  street: { type: String, required: [true, "Street is required"] },
  city: { type: String, required: [true, "City is required"] },
  country: { type: String, required: [true, "Country is required"] },
});
const OrderSchema = new mongoose_1.Schema({
  productName: { type: String, required: [true, "Product Name is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});
const UserSchema = new mongoose_1.Schema({
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
UserSchema.pre("save", function (next) {
  return __awaiter(this, void 0, void 0, function* () {
    // console.log(this,"pre hook");
    const user = this;
    user.password = yield bcrypt_1.default.hash(
      user.password,
      Number(process.env.BCRYPT_SALT)
    );
    next();
  });
});
//post hook
UserSchema.post("save", function () {
  console.log(this, "post hook");
});
// model
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
