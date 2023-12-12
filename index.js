import express from "express";
import mongoose from 'mongoose';
import router from './routes/user-router';

 import pdfRouter from "./routes/pdf-routes";
import morgan from "morgan";

 
 import cors from 'cors'
 const app = express();
 app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
app.use("/files", express.static("files"));




app.use('/api/user', router);

app.use('/api/pdf', pdfRouter);

mongoose.connect("mongodb+srv://vishnupriyakolatt:foq3pHm7KOiI0MFe@cluster0.juzukyq.mongodb.net/PDFWEB?retryWrites=true&w=majority")
    .then(() => app.listen(8000, () => console.log("Connected to database and listening on port 8000")))
    .catch((error) => console.error("Connection error:", error));


