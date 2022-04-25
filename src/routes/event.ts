
import { getNomina } from "../controller/event";

const { Router } = require('express');
const router = Router();

router.get('/nomina', getNomina);

export { router as nomina };