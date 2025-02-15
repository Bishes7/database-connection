import express from "express";

const router = express.Router();

// Using the crud methods

router.get("/api/v1/users", (req, res) => {
  res.json({
    message: "Get Method implemented",
  });
});

router.post("/api/v1/users", (req, res) => {
  res.json({
    message: "Post method implemented",
  });
});

// Export router
export default router;
