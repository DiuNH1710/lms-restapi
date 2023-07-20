const express = require("express");
const {
  registerAUser,
  loginUser,
  getAllUser,
  updateUser,
  deleteUser,
  getAUser,
  blockUser,
  unblockUser,
} = require("../controllers/userCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);

userRouter.get("/all-users", isAdmin, getAllUser);

userRouter.put("/update-profile", authMiddleware, updateUser);
userRouter.delete("/:id", authMiddleware, isAdmin, deleteUser);
userRouter.get("/:id", authMiddleware, getAUser);
userRouter.put("/block/:id", authMiddleware, isAdmin, blockUser);
userRouter.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);

module.exports = userRouter;
