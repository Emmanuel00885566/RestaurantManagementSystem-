import express from "express";
import bodyParser from "body-parser";

import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import tableRoutes from "./routes/tableRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";

const app = express();

// middleware
app.use(bodyParser.json());

// routes
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/inventory", inventoryRoutes);

// base route
app.get("/", (req, res) => {
  res.send("Restaurant Management System API is running...");
});

export default app;