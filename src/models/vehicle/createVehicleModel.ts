import { Vehicle } from "../../interfaces/vehicle";
import { client } from "../../services/prismaClient";

export class CreateVehicleModel {
  async execute(data: Vehicle) {
    try {
      const vehicle = await client.veiculo.create({
        data: {
          placa: data.placa,
          rastrado: data.rastradoBool,
          altura: data.alturaNum,
          comprimento: data.comprimentoNum,
          largura: data.larguraNum,
          cubagem: data.cubagemNum,
          created_at: new Date(),
        },
        select: {
          id: true,
          placa: true,
          rastrado: true,
          altura: true,
          comprimento: true,
          largura: true,
          cubagem: true,
          created_at: true,
        },
      });

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
