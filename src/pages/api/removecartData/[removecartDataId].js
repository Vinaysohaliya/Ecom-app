import { connectToDatabase } from "../auth/db/user.db";
import jwt from "jsonwebtoken";
import User from "../model/user";

export default async function handler(req, res) {
  try {
    if (req.method === "DELETE") {
      const { removecartDataId } = req.query;
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const decoded = jwt.verify(token, "your-secret-key");
      const userId = decoded.id;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(removecartDataId);

      // Remove the product from the user's cart
      const updatedCart = user.cart.filter((cartItem) => cartItem._id.toString() !== removecartDataId);

      // Update the user's cart in the database
      user.cart = updatedCart;
      await user.save();

      return res.status(200).json({ message: "Item removed from cart", updatedCart });
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
