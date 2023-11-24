import mongoose from "mongoose";
import app from "./app";
const port = 5000;
require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("line-13", error);
  }
}
main();
