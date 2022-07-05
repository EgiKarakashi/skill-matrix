CREATE TABLE IF NOT EXISTS "public"."Board_Admins" (
 "board_id" INT NOT NULL,
 "user_id" INT NOT NULL,
 CONSTRAINT "board_admins_pkey" PRIMARY KEY ("board_id", "user_id")
);

ALTER TABLE ONLY "public"."Board_Admins" 
ADD CONSTRAINT "users_pkey" 
FOREIGN KEY (user_id) REFERENCES "Users"(user_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Board_Admins" 
ADD CONSTRAINT "boards_pkey" 
FOREIGN KEY (board_id) REFERENCES "Boards"(board_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;