-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema l4urqgyfmmtjdc8q
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema l4urqgyfmmtjdc8q
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `l4urqgyfmmtjdc8q` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `l4urqgyfmmtjdc8q` ;

-- -----------------------------------------------------
-- Table `l4urqgyfmmtjdc8q`.`formulario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l4urqgyfmmtjdc8q`.`formulario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `apellido` VARCHAR(25) NOT NULL,
  `telefono` VARCHAR(30) NOT NULL,
  `email` VARCHAR(35) NOT NULL,
  `mensaje` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
