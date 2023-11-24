import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
