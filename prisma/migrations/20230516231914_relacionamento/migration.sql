-- AddForeignKey
ALTER TABLE `fotoVeiculo` ADD CONSTRAINT `fotoVeiculo_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `veiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
