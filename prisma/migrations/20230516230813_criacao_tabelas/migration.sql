-- CreateTable
CREATE TABLE `veiculo` (
    `id` VARCHAR(191) NOT NULL,
    `placa` VARCHAR(7) NOT NULL DEFAULT '',
    `rastrado` BOOLEAN NOT NULL DEFAULT false,
    `comprimento` DOUBLE NOT NULL DEFAULT 0.00,
    `largura` DOUBLE NOT NULL DEFAULT 0.00,
    `altura` DOUBLE NOT NULL DEFAULT 0.00,
    `cubagem` DOUBLE NOT NULL DEFAULT 0.00,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fotoVeiculo` (
    `id` VARCHAR(191) NOT NULL,
    `veiculoId` VARCHAR(191) NOT NULL,
    `image` LONGBLOB NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
