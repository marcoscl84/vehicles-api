import { client } from "../../services/prismaClient";

export class DeleteVehicleModel {
  async delete(id: number) {
    try {
      const vehicle = await client.veiculo.delete({
        where: {
          id: id,
        },
        select: {
          id: true,
          placa: true,
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
