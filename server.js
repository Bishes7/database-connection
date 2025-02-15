import express from "express";

import userRouter from "./src/userRouter.js";

const app = express();
const PORT = 8000;

// Using the middleware
app.use(express.json());

// Passing the value from server.js to userRouter.js
app.use("/", userRouter);

// Using the listener
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
