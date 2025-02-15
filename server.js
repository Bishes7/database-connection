import express from "express";

const app = express.Router();

// Using the middleware
app.use(express.json());
