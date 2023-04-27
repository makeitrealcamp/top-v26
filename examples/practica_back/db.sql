-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema notes_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema notes_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `notes_db` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `notes_db` ;

-- -----------------------------------------------------
-- Table `notes_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notes_db`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `notes_db`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notes_db`.`notes` (
  `idnotes` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(4000) NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idnotes`),
  INDEX `fk_notes_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_notes_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `notes_db`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
