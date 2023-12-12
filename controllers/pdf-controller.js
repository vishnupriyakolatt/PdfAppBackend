import mongoose from "mongoose";
import PdfSchema from "../models/Pdf.js";


export const postpdf=async(req,res)=>{
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    try {
      await PdfSchema.create({ title: title, pdf: fileName });
      res.send({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
}


export const getAllpdf=async(req,res)=>{
    try {
        PdfSchema.find({}).then((data) => {
            console.log(data)
          res.send({ status: "ok", data: data });
        }).catch((err)=>console.log(err))
      } catch (error) {
        console.log(error)
      }
    }
