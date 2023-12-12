import express from "express";
import upload from "../config/multer";
import { getAllpdf,postpdf} from "../controllers/pdf-controller";


const router = express.Router();

router.get("/get-files", getAllpdf);
router.post("/upload-files",upload.single("file"),postpdf)



export default router;