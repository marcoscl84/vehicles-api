import { CreateVehicleModel } from "../../models/vehicle/createVehicleModel";
import { CreateImageModel } from "../../models/images/createImageModel";

export class CreateVehicleController {
  async handle(data: any) {
    const createVehicleModel = new CreateVehicleModel();
    const createImageModel = new CreateImageModel();

    if (data.placa === "") {
      throw new Error("Placa not specified");
    }

    const { placa, rastrado, altura, comprimento, largura, cubagem } = data;
    const rastradoBool = JSON.parse(rastrado);
    const alturaNum = parseFloat(altura);
    const comprimentoNum = parseFloat(comprimento);
    const larguraNum = parseFloat(largura);
    const cubagemNum = parseFloat(cubagem);

    const pics = data.images;

    try {
      const vehicle = await createVehicleModel.execute({
        placa,
        rastradoBool,
        alturaNum,
        comprimentoNum,
        larguraNum,
        cubagemNum,
      });

      const idVehicle = vehicle.id;

      await createImageModel.execute({ pics, idVehicle });

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
