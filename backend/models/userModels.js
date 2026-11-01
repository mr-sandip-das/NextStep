import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        default: "student"
    },

    educationLevel: {
        type: String,
        enum: [
            "class-5-8",
            "class-9-10",
            "class-11-12",
            "diploma",
            "undergraduate",
            "postgraduate",
            "phd",
            "other"
        ],
        required: true
    },

    learningDomain: {
        type: String,
        enum: [
            "web-development",
            "app-development",
            "software-development",
            "programming",
            "data-science",
            "artificial-intelligence",
            "machine-learning",
            "cybersecurity",
            "database-management",
            "cloud-computing",
            "other"
        ],
        required: true
    },

    profileImage: {
        type: String,
        default: ""
    }

}, {
    timestamps:true
});

const Users = mongoose.model("users", userSchema);

export default Users; 