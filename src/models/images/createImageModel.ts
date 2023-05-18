import { client } from "../../services/prismaClient";

export class CreateImageModel {
  async execute(data: any) {
    try {
      await Promise.all(
        data.pics.map(async (image: any) => {
          const createdImg = await client.fotoVeiculo.create({
            data: {
              file: image,
              veiculoId: data.idVehicle,
              created_at: new Date(),
            },
            select: {
              id: true,
              file: true,
              veiculoId: true,
              created_at: true,
            },
          });
          return createdImg;
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred.");
      }
    }
  }
}
