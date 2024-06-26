import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token, "token");
  res.cookie("jwt", token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV !== "development",
    secure:true,
    sameSite: "strict",
    // maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  console.log(res);
};

export default generateToken;
