import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";

//parsers
app.use(express.json());
app.use(express.text());
app.use(cors());

//applications routes
app.use("/api/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
