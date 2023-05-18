import { FotoVeiculo } from "@prisma/client";

export interface Vehicle {
  id?: number;
  placa: string;
  rastradoBool: boolean;
  alturaNum: number;
  comprimentoNum: number;
  larguraNum: number;
  cubagemNum: number;
}
