import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import GoogleRoutes from "./routes/GoogleRoutes.js";

//initiate express to be able to call methods from.
const app = express();
//gain access to our environment variables
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9001;

app.use("/", GoogleRoutes);

app.listen(PORT, () => {
  //Log a message to terminal to show that connection is successful
  console.log(`Listening on port ${PORT}`);
});
