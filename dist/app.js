"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/user/user.route");
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use((0, cors_1.default)());
//applications routes
app.use("/api/users", user_route_1.UserRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
exports.default = app;
