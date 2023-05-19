import { DeleteVehicleModel } from "../../models/vehicle/deleteVehicleModel";
import { DeleteImageModel } from "../../models/images/deleteImageModel";

export class DeleteVehicleController {
  async execute(id: number) {
    const deleteVehicleModel = new DeleteVehicleModel();
    const deleteImageModel = new DeleteImageModel();

    try {
      await deleteImageModel.delete(id);
      const vehicle = await deleteVehicleModel.delete(id);

      return vehicle;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred.");
      }
    }
  }
}
