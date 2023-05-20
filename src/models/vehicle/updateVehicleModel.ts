import { client } from "../../services/prismaClient";
import { Vehicle } from "../../interfaces/vehicle";

export class UpdateVehicleModel {
  async update(data: Vehicle) {
    try {
      const vehicle = await client.veiculo.update({
        where: {
          id: data.id,
        },
        data: {
          placa: data.placa,
          rastrado: data.rastradoBool,
          altura: data.alturaNum,
          comprimento: data.comprimentoNum,
          largura: data.larguraNum,
          cubagem: data.cubagemNum,
        },
        select: {
          id: true,
          placa: true,
          rastrado: true,
          altura: true,
          comprimento: true,
          largura: true,
          cubagem: true,
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
