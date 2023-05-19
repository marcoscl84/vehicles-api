import express from "express";
import multer, { Multer } from "multer";

import { CreateVehicleController } from "./controllers/vehicle/createVehicleController";
import { DeleteVehicleController } from "./controllers/vehicle/deleteVehicleController";
import { GetallVehicleController } from "./controllers/vehicle/getallVehicleController";

const router = express.Router();
// const upload = multer({ dest: "uploads/" });
const upload: Multer = multer();

const createVehicleController = new CreateVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const getallVehicleController = new GetallVehicleController();

// CREATE VEHICLE
router.post("/vehicles/create", upload.array("images", 5), async (req, res) => {
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
    res.status(500).json({ error: "Cannot register vehicle..." });
  }
});

// DELETE VEHICLE
router.delete("/vehicles/delete/:id", async (req, res) => {
  const data = parseInt(req.params.id);

  try {
    const vehicle = await deleteVehicleController.handle(data);
    res.status(200).json({ vehicle });
  } catch (error) {
    res.status(500).json({ error: "Cannot delete vehicle" });
  }
});

// GET ALL VEHICLES
router.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await getallVehicleController.handle();
    res.status(200).json({ vehicles });
  } catch (error) {
    res.status(500).json({ error: "Cannot find any vehicle" });
  }
});

export default router;
