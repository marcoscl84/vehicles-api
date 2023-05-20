import { client } from "../../services/prismaClient";

export class GetVehicleByIdModel {
  async get(id: number) {
    try {
      const vehicle = await client.veiculo.findFirst({
        where: {
          id: id,
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
