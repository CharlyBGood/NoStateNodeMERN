import { Router } from "express";
import * as linksController from "../controllers/links.controller";
// import * as linkCtrl from "../controllers/link.controller";

const router = Router();

router.get("/", linksController.getLinks);
router.post("/", linksController.createLink);


router.get("/:id", linksController.getLink);

router.delete("/:id", linksController.deleteLink);

router.put("/:id", linksController.updateLink);

export default router;

// el orden de las rutas influye en el comportamiento de las peticiones
