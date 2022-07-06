CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;


CREATE TABLE IF NOT EXISTS "public"."Answers" (
 "answer_id" serial,
 "board_id" INT NOT NULL,
 "user_id" INT NOT NULL,
 "survey_id" INT NOT NULL,
 "question_id" INT NOT NULL,
 "question_etag" TIMESTAMPTZ NOT NULL,
 "created_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 "updated_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 "score" INT CHECK (score BETWEEN 0 AND 100),
 "data" JSON NOT NULL DEFAULT '{}',
 "notes" TEXT NOT NULL,
 CONSTRAINT "answers_pkey" PRIMARY KEY ("answer_id")
);

ALTER TABLE ONLY "public"."Answers" 
ADD CONSTRAINT "users_pkey" 
FOREIGN KEY (user_id) REFERENCES "Users"(user_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Answers" 
ADD CONSTRAINT "board_pkey" 
FOREIGN KEY (board_id) REFERENCES "Boards"(board_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Answers" 
ADD CONSTRAINT "surveys_pkey" 
FOREIGN KEY (survey_id) REFERENCES "Survey"(survey_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Answers" 
ADD CONSTRAINT "questions_pkey" 
FOREIGN KEY (question_id) REFERENCES "Questions"(question_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

CREATE TRIGGER "set_public_answers_updated_at"
BEFORE UPDATE ON "public"."Answers"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();

COMMENT ON TRIGGER "set_public_answers_updated_at" ON "public"."Answers" 
IS 'Trigger to set value of column "updated_at" to current timestamp on row update';