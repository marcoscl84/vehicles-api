import express from "express";
import multer, { Multer } from "multer";

import { CreateVehicleController } from "./controllers/vehicle/createVehicleController";
import { DeleteVehicleController } from "./controllers/vehicle/deleteVehicleController";

const router = express.Router();
// const upload = multer({ dest: "uploads/" });
const upload: Multer = multer();

const createVehicleController = new CreateVehicleController();
const deleteVehicleController = new DeleteVehicleController();

// CREATE VEHICLE
router.post("/vehicle", upload.array("images", 5), async (req, res) => {
  if (!req.files) {
    throw new Error("No image received");
  }

  const binaryImages: Buffer[] = (req.files as Express.Multer.File[]).map(
    (file: Express.Multer.File) => file.buffer
  );

  if (!binaryImages || binaryImages.length === 0) {
    return res.status(400).json({ error: "At least one imagem needed" });
  }

  req.body = {
    ...req.body,
    images: binaryImages,
  };

  const data = req.body;

  try {
    const vehicle = await createVehicleController.handle(data);

    res
      .status(200)
      .json({ vehicle, message: "Successfully registered vehicle!" });
  } catch (error) {
    res.status(400).json({ error: "Cannot register vehicle..." });
  }
});

// DELETE VEHICLE
router.delete("/vehicle/delete/:id", async (req, res) => {
  const data = parseInt(req.params.id);

  try {
    const vehicle = await deleteVehicleController.execute(data);
    res.status(200).json({ vehicle });
  } catch (error) {
    res.status(400).json({ error: "Cannot delete vehicle" });
  }
});

export default router;
