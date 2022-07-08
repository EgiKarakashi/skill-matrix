
 



/*

 --Boards
INSERT INTO "public"."Boards" ("board_id", "name")

SELECT 
  ("board") AS "board_id",
  CONCAT('board', "board") AS "name"
  

FROM generate_series(1, 100) AS "board"

ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET
  "board_id" = EXCLUDED."board_id",
  "name" = EXCLUDED."name";



 --Users
INSERT INTO "public"."Users" ("user_id", "name")
SELECT 
  ("user") AS "user_id",
  CONCAT('user', "user") AS "name"
 
  FROM generate_series(1, 100) AS "user"

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET
  "user_id" = EXCLUDED."user_id",
  "name" = EXCLUDED."name";  




 --Boards_Admins
INSERT INTO "public"."Board_Admins" ("board_id", "user_id")

SELECT 
  ("board") AS "board_id",
  ("board") AS "user_id"
  
FROM generate_series(1, 100) AS "board"

ON CONFLICT ON CONSTRAINT "board_admins_pkey"
DO UPDATE SET
  "board_id" = EXCLUDED."board_id",
  "user_id" = EXCLUDED."user_id"; 


  --Questions
INSERT INTO "public"."Questions" ("board_id", "type", "data", "etag", "is_deleted")

SELECT 
  (floor(random() * (100 - 1 +1) +1)) AS "board_id",
  'type-a' AS "type",
'{"FoodType":"veg","pref":"High"}' AS "data",
Now() AS "etag",
TRUE AS "is_deleted" 

 
 FROM generate_series(1, 100) AS "question"


ON CONFLICT ON CONSTRAINT "questions_pkey"
DO UPDATE SET  
  "board_id" = EXCLUDED."board_id",
  "etag" = EXCLUDED."etag",
"type" = EXCLUDED."type",
"is_deleted" = EXCLUDED."is_deleted",
"data" = EXCLUDED."data";


 --Surveys
 INSERT INTO "public"."Survey" ("board_id", "created_at","updated_at","open_since" , "open_until")

SELECT 
 (floor(random() * (100 - 1 +1) +1)) AS "board_id",
now() - '30d'::INTERVAL * random() AS "created_at",
now() - '30d'::INTERVAL * random() AS "updated_at",
now() - '30d'::INTERVAL * random() AS "open_since",
now() + '7d'::INTERVAL * random() AS "open_until"
 
  FROM generate_series(1, 100) AS "survey"

ON CONFLICT ON CONSTRAINT "surveys_pkey"
DO UPDATE SET  
  "board_id" = EXCLUDED."board_id",
"created_at" = EXCLUDED."created_at",
 "updated_at" = EXCLUDED."updated_at",
"open_since" = EXCLUDED."open_since",
"open_until" = EXCLUDED."open_until";
 
--Answer
INSERT INTO "public"."Answers" ("user_id", "board_id", "question_id", "question_etag","survey_id","created_at", "updated_at", "score", "notes", "data")

SELECT
   (floor(random() * (10 - 1 +1) +1)) AS "user_id",
   (floor(random() * (10 - 1 +1) +1)) AS "board_id",
   (floor(random() * (10 - 1 +1) +1)) AS "question_id",
now() - '30d'::INTERVAL * random() AS "question_etag",
(floor(random() * (10 - 1 +1) +1)) AS "survey_id",
   now() - '30d'::INTERVAL * random() AS "created_at",
   now() - '30d'::INTERVAL * random() AS "updated_at",
      '1' AS "score",
  CONCAT('answer', "answer") AS "notes",
'{"FoodType":"veg","pref":"High"}' AS "data"
 
 FROM generate_series(1, 100) AS "answer"

ON CONFLICT ON CONSTRAINT "answers_pkey"
DO UPDATE SET 
 
 
  "user_id" = EXCLUDED."user_id",
 "board_id" = EXCLUDED."board_id",
 "survey_id" = EXCLUDED."survey_id",
 "question_id" = EXCLUDED."question_id",
 "created_at" = EXCLUDED."created_at",
 "updated_at" = EXCLUDED."updated_at",
 "question_etag"=EXCLUDED."question_etag",
 "score" = EXCLUDED."score",
 "notes" = EXCLUDED."notes",
 "data" = EXCLUDED."data"; 








 INSERT INTO "public"."Boards"("board_id", "name")
VALUES (1, 'Board-1'),
(2, 'Board-2'),
(3, 'Board-3');


INSERT INTO "public"."Questions"("board_id", "type", "data", "etag", "is_deleted")
VALUES (1, 'type-a', '{"Question" : "Do you agree with 1"}', Now(), FALSE),
(2, 'type-a', '{"Question" : "Do you agree with 2"}', Now(), FALSE),
(3, 'type-a', '{"Question" : "Do you agree with 3"}', Now(), FALSE);



INSERT INTO "public"."Users"("user_id","name")
VALUES (1, 'Sindi'),
(2, 'Egi'),
(3, 'Admir');

 INSERT INTO "public"."Survey" ("board_id", "created_at","updated_at","open_since" , "open_until")
VALUES (1, now() - '30d'::INTERVAL * random(), now() - '30d'::INTERVAL * random(), now() - '30d'::INTERVAL * random(), now() + '7d'::INTERVAL * random() );

 


 INSERT INTO "public"."Board_Admins"("board_id","user_id")
VALUES (1, 1),
(2, 1),
(3, 2);


INSERT INTO "public"."Answers" ("user_id", "board_id", "question_id", "question_etag","survey_id","created_at", "updated_at", "score", "notes", "data")
VALUES(1, 1, 118, now() - '30d'::INTERVAL * random(), 701, now() - '30d'::INTERVAL * random(), now() - '30d'::INTERVAL * random(), '1', CONCAT('answer', "answer"), {'{"FoodType":"veg","pref":"High"}'}  )

*/





