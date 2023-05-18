-- CreateTable
CREATE TABLE `veiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(7) NOT NULL DEFAULT '',
    `rastrado` BOOLEAN NOT NULL DEFAULT false,
    `comprimento` DOUBLE NOT NULL DEFAULT 0.00,
    `largura` DOUBLE NOT NULL DEFAULT 0.00,
    `altura` DOUBLE NOT NULL DEFAULT 0.00,
    `cubagem` DOUBLE NOT NULL DEFAULT 0.00,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fotoVeiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file` LONGBLOB NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `veiculoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fotoVeiculo` ADD CONSTRAINT `fotoVeiculo_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `veiculo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
