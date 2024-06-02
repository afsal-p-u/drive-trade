const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { DBconnect } = require("./utils/db");

const authRoutes = require("./routes/auth.route");
const productRoutes = require("./routes/product.route");

DBconnect();

const app = express();
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json())

// console.log(process.env.ORIGIN)

app.use('/', (req, res) => {
  res.send('hello world')
})
 
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/product", productRoutes);

const port = process.env.PORT | 5000;
app.listen(port, console.log("Server running on port ", port));
