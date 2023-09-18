import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((c) => console.log(`mongodb connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
