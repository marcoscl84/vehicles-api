import { Vehicle } from "../../interfaces/vehicle";
import { client } from "../../services/prismaClient";

export class GetallVehicleModel {
  async get() {
    try {
      const vehicle = await client.veiculo.findMany({
        select: {
          id: true,
          placa: true,
          rastrado: true,
          altura: true,
          comprimento: true,
          largura: true,
          cubagem: true,
          created_at: true,
          FotoVeiculo: {
            select: {
              id: true,
              file: true,
            },
          },
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
