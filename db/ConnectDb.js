import mongoose from "mongoose"



const connectdb = async () => {
    const db = await mongoose.connect("mongodb://localhost:27017/test").then(() => {
        console.log("db connected").catch(() => {
            console.log("error connecting db")
        })
    })
}
export default connectdb