
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(express.json());
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Bakery Inventory Management API is running!");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
