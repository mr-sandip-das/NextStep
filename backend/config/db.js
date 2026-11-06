import mongoose from "mongoose";
const connectDB=async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connect SuccessFully");
    
} catch (error) {
    console.log(error.message);
    process.exit(1);
}
};

export default connectDB;