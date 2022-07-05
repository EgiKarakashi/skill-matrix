--Boards
INSERT INTO "public"."Boards" ("board_id", "name")

SELECT 
  ("board") AS "id",
  CONCAT('board', "board") AS "name"
  

FROM generate_series(1, 100) AS "board"

ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET
  "board_id" = EXCLUDED."board_id",
  "name" = EXCLUDED."name";

--Users
INSERT INTO "public"."Users" ("user_id", "name", "settings")

SELECT 
  ("user") AS "id",
  CONCAT('user', "user") AS "name",
  CONCAT('setting', "user") AS "settings"
  

FROM generate_series(1, 100) AS "user"

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET
  "user_id" = EXCLUDED."user_id",
  "name" = EXCLUDED."name",
  "settings" = EXCLUDED."settings";


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
'etag' AS "etag",
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
INSERT INTO "public"."Survey" ("board_id", "open_since" , "open_until")

SELECT 
  (floor(random() * (100 - 1 +1) +1)) AS "board_id",
now() - '30d'::INTERVAL * random() AS "open_since",
now() + '7d'::INTERVAL * random() AS "open_until"
 
  FROM generate_series(1, 100) AS "survey"

ON CONFLICT ON CONSTRAINT "surveys_pkey"
DO UPDATE SET  
  "board_id" = EXCLUDED."board_id",
"open_since" = EXCLUDED."open_since",
"open_until" = EXCLUDED."open_until";

--Answer
INSERT INTO "public"."Answers" ("user_id", "survey_id", "question_id", "created_at", "updated_at", "score", "notes")

SELECT 
  (floor(random() * (100 - 1 +1) +1)) AS "user_id",
  (floor(random() * (100 - 1 +1) +1)) AS "survey_id",
  (floor(random() * (100 - 1 +1) +1)) AS "question_id",
  now() - '30d'::INTERVAL * random() AS "created_at",
  now() - '30d'::INTERVAL * random() AS "updated_at",
  '1' AS "score",
  CONCAT('answer', "answer") AS "notes"
 

FROM generate_series(1, 100) AS "answer"

ON CONFLICT ON CONSTRAINT "answers_pkey"
DO UPDATE SET  "user_id" = EXCLUDED."user_id",
  "question_id" = EXCLUDED."question_id",
  "created_at" = EXCLUDED."created_at",
  "updated_at" = EXCLUDED."updated_at",
  "score" = EXCLUDED."score",
  "notes" = EXCLUDED."notes";

-- Invites
INSERT INTO "public"."Invites" ("user_id", "survey_id")

SELECT 
  ("invite") AS "user_id",
  ("invite") AS "survey_id"
  
FROM generate_series(1, 100) AS "invite"

ON CONFLICT ON CONSTRAINT "invites_pkey"
DO UPDATE SET
  "user_id" = EXCLUDED."user_id",
  "survey_id" = EXCLUDED."survey_id";