import { client } from "../../services/prismaClient";

export class DeleteImageModel {
  async delete(id: number) {
    try {
      const hasImage = await client.fotoVeiculo.findMany({
        where: {
          veiculoId: id,
        },
      });

      if (hasImage.length > 0) {
        const images = await client.fotoVeiculo.deleteMany({
          where: {
            veiculoId: id,
          },
        });
        return images;
      } else {
        throw new Error("Images doesn't found.");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred.");
      }
    }
  }
}
