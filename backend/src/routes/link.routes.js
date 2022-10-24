import { Router } from "express";
import * as linkCtrl from "../controllers/link.controller";

const router = Router();

router.post("/links", linkCtrl.createLink);

router.get("/links", linkCtrl.findAllLinks);

router.get("/links/:id", linkCtrl.findOneLink);

router.delete("/links/:id", linkCtrl.deleteLink);

router.put("/links/:id", linkCtrl.updateLink);

export default router;

// el orden de las rutas influye en el comportamiento de las peticiones
