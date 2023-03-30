/*
  Warnings:

  - Made the column `description` on table `task-state` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `task-state` MODIFY `description` VARCHAR(1000) NOT NULL;
