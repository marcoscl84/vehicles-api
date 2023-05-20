import { UpdateVehicleModel } from "../../models/vehicle/updateVehicleModel";
import { DeleteImageModel } from "../../models/images/deleteImageModel";
import { CreateImageModel } from "../../models/images/createImageModel";

export class UpdateVehicleController {
  async handle(data: any) {
    console.log(data.paramId);
    const updateVehicleModel = new UpdateVehicleModel();
    const deleteImageModel = new DeleteImageModel();
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
      // EXCLUI IMAGENS CADASTRADAS
      await deleteImageModel.delete(data.paramId);

      // ATUALIZA DADOS DO VEÍCULO
      const vehicle = await updateVehicleModel.update({
        id: data.paramId,
        placa,
        rastradoBool,
        alturaNum,
        comprimentoNum,
        larguraNum,
        cubagemNum,
      });

      const idVehicle = vehicle.id;

      // INSERE IMAGENS ANTIGAS QUE NÃO FORAM SOLICITAS EXCLUSÃO E NOVAS IMAGENS
      await createImageModel.execute({ pics, idVehicle });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Unknown error occurred.");
      }
    }
  }
}
