PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT, `favoriteColor` TEXT DEFAULT 'green', `age` INTEGER, `cash` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
DELETE FROM sqlite_sequence;
COMMIT;
