PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE customers (id number, user varchar);
INSERT INTO customers VALUES(NULL,'nick');
INSERT INTO customers VALUES(NULL,'nick');
INSERT INTO customers VALUES(NULL,'nickle');
INSERT INTO customers VALUES(12,NULL);
INSERT INTO customers VALUES(12,'hii');
INSERT INTO customers VALUES(12,'hii');
COMMIT;