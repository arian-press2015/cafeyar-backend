/*
  Warnings:

  - You are about to alter the column `age` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `weight` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `height` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `age` INTEGER NULL,
    MODIFY `weight` INTEGER NULL,
    MODIFY `height` INTEGER NULL;
