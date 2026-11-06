import User from "../models/userModels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

const registerUser = async (req, resp) => {
   try {
      const { name, email, password, profileImage } = req.body;
      if (!name || !email || !password || !profileImage) {
         return resp.status(400).json({
            success: false,
            message: "All Field are required"
         });
      }


      const existEmail = await User.findOne({
         email: email.trim().toLowerCase()
      })

      if (existEmail) {
         return resp.status(404).json({
            success: false,
            message: "Email is Already exist"
         });
      }

      const convertPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
         name,
         email,
         password: convertPass,
         profilePhoto: profileImage
      });

      return resp.status(200).json({
         success: true,
         data: {
            name: newUser.name,
            email: newUser.email,
         },
         message: "User Register Successfully"
      });



   } catch (error) {
      return resp.status(500).json({
         success: false,
         message: "User not Register Try again"
      })
   }

};



const loginUser = async (req, resp) => {
   try {
      const { email, password } = req.body;
      

      if (!email || !password) {
         return resp.status(400).json({
            success: false,
            message: "All fields are required"
         });
      }

      const existingUser = await User.findOne({
         email: email.trim().toLowerCase()
      });

      // return resp.send(existingUser);

      if (!existingUser) {
         return resp.status(404).json({
            success: false,
            message: "Email does not exist. Please register."
         });
      }
      
      const isPasswordValid = await bcrypt.compare(
         password,
         existingUser.password
      );
      

      if (!isPasswordValid) {
         return resp.status(401).json({
            success: false,
            message: "Invalid password"
         });
      }

      const token=jwt.sign(
         {userId:existingUser._id},
         process.env.JWT_SECRET_KEY,
         {expiresIn:"1d"}
      )

      resp.cookie("jwtToken",token,{
         httpOnly:true,
         secure: false,
         sameSite: "lax",
         maxAge: 7 * 24 * 60 * 60 * 1000,
         path: "/"
      })

   
      return resp.status(200).json({
         success: true,
         message: "Login successful"
      });

   } catch (error) {
      console.error("Login Error:", error);

      return resp.status(500).json({
         success: false,
         message: "Internal server error"
      });
   }
};


export { registerUser, loginUser }