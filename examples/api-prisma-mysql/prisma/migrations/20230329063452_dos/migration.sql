/*
  Warnings:

  - Made the column `name` on table `gestor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `gestor` MODIFY `name` VARCHAR(45) NOT NULL;
