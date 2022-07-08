CREATE VIEW "public"."surveys_questions" AS
SELECT
  "question_id",
  "survey_id",
  "board_id",
  "etag",
  "type",
  "data"
FROM (
  -- Join each question version with the related survey
  SELECT DISTINCT ON ("s"."survey_id", "q"."question_id")
    "q"."question_id" AS "question_id",
    "s"."survey_id" AS "survey_id",
    "s"."board_id",
    "q"."etag",
    "q"."type",
    "q"."data",
    "q"."is_deleted"
  FROM "public"."Questions" AS "q"
  JOIN "public"."Survey" AS "s" 
    ON "q"."board_id" = "s"."board_id"
  WHERE "s"."created_at" >= "q"."etag"
  ORDER BY "s"."survey_id" DESC, "q"."question_id", "q"."etag" DESC
) ds
WHERE "is_deleted" IS FALSE
;