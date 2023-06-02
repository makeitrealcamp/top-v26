-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`_prisma_migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`_prisma_migrations` (
  `id` VARCHAR(36) NOT NULL,
  `checksum` VARCHAR(64) NOT NULL,
  `finished_at` DATETIME(3) NULL DEFAULT NULL,
  `migration_name` VARCHAR(255) NOT NULL,
  `logs` TEXT NULL DEFAULT NULL,
  `rolled_back_at` DATETIME(3) NULL DEFAULT NULL,
  `started_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` INT UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`gestor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`gestor` (
  `idgestor` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `active` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idgestor`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project` (
  `idproject` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idproject`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`gestor_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`gestor_project` (
  `idgestor` INT NOT NULL,
  `idproject` INT NOT NULL,
  PRIMARY KEY (`idgestor`, `idproject`),
  INDEX `fk_gestor_has_project_gestor1_idx` (`idgestor` ASC) VISIBLE,
  INDEX `fk_gestor_has_project_project1_idx` (`idproject` ASC) VISIBLE,
  CONSTRAINT `fk_gestor_has_project_gestor1`
    FOREIGN KEY (`idgestor`)
    REFERENCES `mydb`.`gestor` (`idgestor`),
  CONSTRAINT `fk_gestor_has_project_project1`
    FOREIGN KEY (`idproject`)
    REFERENCES `mydb`.`project` (`idproject`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`task-state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`task-state` (
  `idtask-state` INT NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`idtask-state`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `idtask` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `idtask-state` INT NOT NULL,
  `idproject` INT NOT NULL,
  `idgestor` INT NOT NULL,
  PRIMARY KEY (`idtask`, `idtask-state`),
  INDEX `fk_task_gestor1_idx` (`idgestor` ASC) VISIBLE,
  INDEX `fk_task_project1_idx` (`idproject` ASC) VISIBLE,
  INDEX `fk_task_task-state_idx` (`idtask-state` ASC) VISIBLE,
  CONSTRAINT `fk_task_gestor1`
    FOREIGN KEY (`idgestor`)
    REFERENCES `mydb`.`gestor` (`idgestor`),
  CONSTRAINT `fk_task_project1`
    FOREIGN KEY (`idproject`)
    REFERENCES `mydb`.`project` (`idproject`),
  CONSTRAINT `fk_task_task-state`
    FOREIGN KEY (`idtask-state`)
    REFERENCES `mydb`.`task-state` (`idtask-state`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 38
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO `gestor` VALUES (1,'Raul','Giraldo','uno@tets.com','123421512',1),(2,'Eugenia','gestor 2',NULL,NULL,1),(5,'gestor 3','gestor 3',NULL,NULL,1);

INSERT INTO `project` VALUES (1,'project 1','description 1'),(2,'project 2','description 2'),(3,'project 3','description 3'),(4,'project 4','description 4'),(5,'project 5','description 5');

INSERT INTO `gestor_project` VALUES (1,1),(1,2),(1,3),(1,4),(2,4);

INSERT INTO `task-state` VALUES (1,'task 1','fasfasf'),(2,'task2','fasfasfasf');

INSERT INTO `user` VALUES (1,'test1@tets.com','1234567'),(2,'test2@tets.com','$2b$12$CeTn2ELBGSLBHFDcN3lkK.0pKVufNZyTMZH1i2Iy5Yh44cGswbbcG'),(3,'mockemail@test.com','$2b$12$UWvwzP6XaY66KARH5pWbN.Mmw3F82hLISwGxSjJzzOr2Fol5TnpNi'),(4,'mockemail@test.com','$2b$12$37IkRq.jjKGJm95ApPgLCeyafD23DUYLR1bjSdtwex1I4dqFxwZQy'),(5,'mockemail@test.com','$2b$12$L3mVSLzyc5jFShnjW7R1G..nJ1Fk.NhvN/MrY/pJbVf.vrChnhtxG'),(6,'mockemail@test.com','$2b$12$PdDEwiBLrdf3JFSL1D15I.VkwHqc485O3krhAUzFgfCzgEqAL6qDe'),(7,'mockemail@test.com','$2b$12$xJCCFYvTJYLmPxFCsD.szOu4C5Rls1wPlETN02Q9.l6GM7ekgT1Ki'),(8,'mockemail@test.com','$2b$12$ArIaaNDSuDQtTgg0XiheF.1rLCIh8t4XV2uIY0jD3/wjp6EDzIW.2'),(9,'mockemail@test.com','$2b$12$CEmEO9I6UCf1QLhxLZr03OJEtgTiJfxbT7UtRdUiz53PdthGQykGy'),(10,'mockemail@test.com','$2b$12$WizRI9eLjUzwNlyyEZ0VCuYDGAuqUwVpxV7uOnfxgnwipt2l9uuGS'),(11,'mockemail@test.com','$2b$12$/iWZ4XEaBjQuijfLurdDYe030vDTUSMFLsqqpvaO7ZYmUv6JP9KeG'),(12,'mockemail@test.com','$2b$12$Db37CdqflV3mSHtaqFnVGObTOt6kXGDTOc4rvbL7yvqk0HLmk77A6'),(13,'mockemail@test.com','$2b$12$AaHwWuIWwRDrIjdltHPiuOCTmJoJTHB8VK2YDn1H/txmhLulkRnLi'),(14,'mockemail@test.com','$2b$12$CovfYfcg6GAG1d5nAPg59OQ788nQdllB5iN0GHKmi51NQ6EQD2EhW'),(15,'mockemail@test.com','$2b$12$CBue3Dr5Un3qyHwpWSTRcehNnAEqkZ49uxUriH96x0hhtsuTBxY2O'),(16,'mockemail@test.com','$2b$12$n5GCLBAXtM7K7utVxFv9lem36WLjf3Z4edLA6aCU0Oo2k8cm3Ndvq'),(17,'mockemail@test.com','$2b$12$S9p36oQA8k0db8CVFcot1ecz2neEIRSgZEn6eIJTNgxMYgndd3gju'),(18,'mockemail@test.com','$2b$12$o2OzpT3D8E0mqpxOoJxPP.KyBoE5MmSOkQ7txt7wE6s/AsqLPlhZq'),(19,'mockemail@test.com','$2b$12$12jOgiWRl.pmH77eivNJjenj7YDC576eHBEhQRceBPwQlVIRyiweK'),(20,'mockemail@test.com','$2b$12$suKx0jhWlEr57HPmd2e/Be2T2F1eHbHcWkxXrmav1FETDoNi4LAcO'),(21,'mockemail@test.com','$2b$12$B4myF/bddTcDpdvoEpaMqu8gG4OTUl6CTG1oDiKwnFzwtZYVelzBG'),(22,'mockemail@test.com','$2b$12$zSBNiztuU/.mFFsfAvot2ejsxm503300g6PoMjjrco4NFFXqB8PFy'),(23,'mockemail@test.com','$2b$12$oibt3CEQwMgzDu4AbdUgW.CcY/YbL/5Ai/lm7MWIqJRk5b1SW0H6S'),(24,'mockemail@test.com','$2b$12$KRm2SLcYWiFBCB0AgdAVK.5/oxONPJwg2J2B90PfXIJ9OoqgpFKDO'),(25,'mockemail@test.com','$2b$12$p3cFIzL3ZbywsACXtKqvQutM4QaKKZfyed8X0mfBoY/jWKTgpvVuy'),(26,'mockemail@test.com','$2b$12$ihu/3sNfJosfcOw/KCyrbOBmNjoiP8zzmQDVMgtq1BpOsLt6JWzzW'),(27,'mockemail@test.com','$2b$12$z0KxeIFe.sgIExOoj1cpHuW1HvvMx/sEHGBqbt7PVl9oqj9knpDsu'),(28,'mockemail@test.com','$2b$12$m8QcHNY0wH6368s18AbZvOtN/nKn8v2IjlcN8/YKTo2wzMa03CyM6'),(29,'mockemail@test.com','$2b$12$Zf65xEW3TpPyfVLLtZCekeCO5XKRH84OQFNCh/qCVYcd5hmkhdV22'),(30,'mockemail@test.com','$2b$12$G6ZYpcbApMVsiMn/Pm/VvuZH0GPyzhDgzWoeHmU24yYG/hQppxTmW'),(31,'mockemail@test.com','$2b$12$vdlOl978zCKHxScJtuytZuokz2RTN8rMKE6cUW3qTClHji4Zrv.X.'),(32,'mockemail@test.com','$2b$12$mP36prNJjfBECEqGo7PaGecb.kN4cmEE336jqUqjsd57iVNGX2sBy'),(33,'mockemail@test.com','$2b$12$I3indjiZl6S03WOhpSrxG.E/6jZFQy0FlaKzBx8S7GrMYfvzOYIdK'),(34,'mockemail@test.com','$2b$12$LXw8lPHbyvCgQmYAiQppP.re9QkLYK2kuUIEKzP/Gzx8XSN9vSb2.'),(35,'mockemail@test.com','$2b$12$sXDgAfTq9zPTG8YpIQ4gUenQlBC5ACZmI1ThnXZ2TVeZ3ACbU32Ke'),(36,'mockemail@test.com','$2b$12$IByBU7N4wnKxZ5zUCXopx.PxdoNRtVoxUixcc36aDAO6HkTmeuDim'),(37,'mockemail@test.com','$2b$12$6Cw8X/emvFJjB95Y2icJhOVWShuT5ctCIDoLKTg2p3At7tep5BEjK');
