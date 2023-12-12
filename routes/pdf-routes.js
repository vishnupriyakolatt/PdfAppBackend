import express from "express";
import upload from "../config/multer.js";
import { getAllpdf,postpdf} from "../controllers/pdf-controller.js";


const router = express.Router();

router.get("/get-files", getAllpdf);
router.post("/upload-files",upload.single("file"),postpdf)



export default router;