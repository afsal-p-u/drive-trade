const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const DBconnect = require("./utils/db");

const authRoutes = require("./routes/auth.route");
const vehicleRoutes = require("./routes/vehicle.route");

DBconnect();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true, 
  })
);
app.use(cookieParser());
app.use(express.json())

// console.log(process.env.ORIGIN)
 
app.use("/api/auth", authRoutes);
app.use("/api/vehicle", vehicleRoutes);

const port = process.env.PORT | 5000;
app.listen(port, console.log("Server running on port ", port));
