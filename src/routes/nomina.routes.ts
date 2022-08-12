
import { Seed } from "../controller/nomina.controller";
import { Router } from "express";

const router = Router();
router.get('/nomina/seed', Seed);

export { router as ruta_nomina };