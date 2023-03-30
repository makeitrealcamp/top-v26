-- CreateTable
CREATE TABLE `gestor` (
    `idgestor` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `apellido` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `phone` VARCHAR(45) NULL,
    `active` BOOLEAN NULL,

    PRIMARY KEY (`idgestor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gestor_project` (
    `idgestor` INTEGER NOT NULL,
    `idproject` INTEGER NOT NULL,

    INDEX `fk_gestor_has_project_gestor1_idx`(`idgestor`),
    INDEX `fk_gestor_has_project_project1_idx`(`idproject`),
    PRIMARY KEY (`idgestor`, `idproject`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project` (
    `idproject` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`idproject`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `idtask` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `description` VARCHAR(255) NULL,
    `idtask-state` INTEGER NOT NULL,
    `idproject` INTEGER NOT NULL,
    `idgestor` INTEGER NOT NULL,

    INDEX `fk_task_gestor1_idx`(`idgestor`),
    INDEX `fk_task_project1_idx`(`idproject`),
    INDEX `fk_task_task-state_idx`(`idtask-state`),
    PRIMARY KEY (`idtask`, `idtask-state`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task-state` (
    `idtask-state` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,

    PRIMARY KEY (`idtask-state`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `gestor_project` ADD CONSTRAINT `fk_gestor_has_project_gestor1` FOREIGN KEY (`idgestor`) REFERENCES `gestor`(`idgestor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `gestor_project` ADD CONSTRAINT `fk_gestor_has_project_project1` FOREIGN KEY (`idproject`) REFERENCES `project`(`idproject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `fk_task_gestor1` FOREIGN KEY (`idgestor`) REFERENCES `gestor`(`idgestor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `fk_task_project1` FOREIGN KEY (`idproject`) REFERENCES `project`(`idproject`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `task` ADD CONSTRAINT `fk_task_task-state` FOREIGN KEY (`idtask-state`) REFERENCES `task-state`(`idtask-state`) ON DELETE NO ACTION ON UPDATE NO ACTION;
