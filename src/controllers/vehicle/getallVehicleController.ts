import { GetallVehicleModel } from "../../models/vehicle/getallVehicleModel";

export class GetallVehicleController {
  async handle() {
    const getallVehicleModel = new GetallVehicleModel();

    try {
      const vehicles = await getallVehicleModel.get();

      return vehicles;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred.");
      }
    }
  }
}
