const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: "Email and password are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found", error: true });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", error: true });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    const cookieOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    };

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    return res.cookie("token", token, cookieOption).status(200).json({
      message: "Login successful",
      token,
      success: true,
      data: userData,
    });
  } catch (error) {
    console.error("Error Login:", error);
    return res.status(500).json({
      error: true,
      message: "Server error",
      data: error.message || error,
    });
  }
};
module.exports = login;
