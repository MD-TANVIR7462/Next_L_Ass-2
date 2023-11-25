"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
const FullNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(25),
    lastName: zod_1.z.string().min(1),
});
const AddressSchema = zod_1.z.object({
    street: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
});
const OrderSchema = zod_1.z.object({
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.UserValidationSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    username: zod_1.z.string().min(1),
    fullName: FullNameSchema,
    age: zod_1.z.number().min(1),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.array(zod_1.z.string().min(1)),
    address: AddressSchema,
    orders: zod_1.z.array(OrderSchema),
});
