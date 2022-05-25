import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.q1qf2.mongodb.net/?retryWrites=true&w=majority`;
  try {
      await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Database connected successfully')
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
