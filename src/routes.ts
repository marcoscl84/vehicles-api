import express from "express";
import multer, { Multer } from "multer";

import { CreateVehicleController } from "./controllers/vehicle/createVehicleController";
import { DeleteVehicleController } from "./controllers/vehicle/deleteVehicleController";
import { GetallVehicleController } from "./controllers/vehicle/getallVehicleController";
import { GetVehicleByIdController } from "./controllers/vehicle/getVehicleByIdController";
import { UpdateVehicleController } from "./controllers/vehicle/updateVehicleController";

const router = express.Router();
// const upload = multer({ dest: "uploads/" });
const upload: Multer = multer();

const createVehicleController = new CreateVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const getallVehicleController = new GetallVehicleController();
const getVehicleByIdController = new GetVehicleByIdController();
const updateVehicleController = new UpdateVehicleController();

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
    const creatVehicle = await createVehicleController.handle(data);

    res
      .status(200)
      .json({ creatVehicle, message: "Successfully registered vehicle!" });
  } catch (error) {
    res.status(500).json({ error: "Cannot register vehicle..." });
  }
});

// UPDATE VEHICLE
router.put(
  "/vehicles/update/:id",
  upload.array("images", 5),
  async (req, res) => {
    const paramId = parseInt(req.params.id);

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
      paramId,
    };

    const data = req.body;

    try {
      const updateVehicle = await updateVehicleController.handle(data);

      res
        .status(200)
        .json({ updateVehicle, message: "Successfully updated vehicle!" });
    } catch (error) {
      res.status(500).json({ error: "Cannot update vehicle..." });
    }
  }
);

// DELETE VEHICLE
router.delete("/vehicles/delete/:id", async (req, res) => {
  const data = parseInt(req.params.id);

  try {
    const deleteVehicle = await deleteVehicleController.handle(data);

    res
      .status(200)
      .json({ deleteVehicle, message: "Successfully deleted vehicle!" });
  } catch (error) {
    res.status(500).json({ error: "Cannot delete vehicle" });
  }
});

// GET ALL VEHICLES
router.get("/vehicles", async (req, res) => {
  try {
    const getVehicles = await getallVehicleController.handle();
    res.status(200).json({ getVehicles });
  } catch (error) {
    res.status(500).json({ error: "Cannot find any vehicle" });
  }
});

// GET VEHICLE BY ID
router.get("/vehicles/:id", async (req, res) => {
  const data = parseInt(req.params.id);

  try {
    const getVehicleById = await getVehicleByIdController.handle(data);

    if (getVehicleById === null) {
      res.status(500).json({ error: "Cannot find any vehicle" });
      return;
    }

    res.status(200).json({ getVehicleById });
  } catch (error) {
    res.status(500).json({ error: "Cannot find any vehicle" });
  }
});

export default router;
