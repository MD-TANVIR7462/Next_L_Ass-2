import { z } from 'zod';


const FullNameSchema = z.object({
  firstName: z.string().min(1).max(25),
  lastName: z.string().min(1),
});

const AddressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const OrderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});


export const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string().min(1),
  password: z.string().min(1),
  fullName: FullNameSchema,
  age: z.number().min(1),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1)),
  address: AddressSchema,
  orders: z.array(OrderSchema),
});