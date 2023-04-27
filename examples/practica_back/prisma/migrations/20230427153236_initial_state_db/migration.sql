-- CreateTable
CREATE TABLE `notes` (
    `idnotes` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(4000) NULL,
    `user_iduser` INTEGER NOT NULL,

    INDEX `fk_notes_user_idx`(`user_iduser`),
    PRIMARY KEY (`idnotes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `iduser` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(45) NULL,
    `password` VARCHAR(255) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `fk_notes_user` FOREIGN KEY (`user_iduser`) REFERENCES `user`(`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;
