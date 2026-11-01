import Users from "../models/userModels.js";
import bcrypt from "bcryptjs"

const registerUser = async (req, resp) => {
   try {
      const { name, email, password, role, educationLevel, learningDomain, profileImage } = req.body;
      if (!name || !email || !password || !role || !educationLevel || !learningDomain || !profileImage) {
         return resp.json({
            success: false,
            message: "All Field are Fillep"
         });
      }
    

      const existEmail = await Users.findOne({
         email: email.trim().toLowerCase()
      })

      if (existEmail) {
         return resp.json({
            success: false,
            message: "Email is Already exist"
         });
      }

      const convertPass = await bcrypt.hash(password,10);
      const newUser = await Users.create({
         name,
         email,
         password: convertPass,
         role,
         educationLevel,
         learningDomain,
         profileImage
      });

      return resp.status(201).json({
         success: true,
         data:{
            name:newUser.name,
            email:newUser.email,
            role:newUser.role
         },
         message: "User Register Successfully"
      });



   } catch (error) {
      return resp.status(404).json({
         success: false,
         message: "User not Register Try again"
      })
   }

};







export { registerUser }