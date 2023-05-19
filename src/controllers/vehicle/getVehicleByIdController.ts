import { GetVehicleByIdModel } from "../../models/vehicle/getVehicleByIdModel";

export class GetVehicleByIdController {
  async handle(id: number) {
    const getVehicleByIdModel = new GetVehicleByIdModel();

    try {
      const vehicle = await getVehicleByIdModel.get(id);

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
