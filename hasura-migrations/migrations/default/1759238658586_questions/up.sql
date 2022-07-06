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


CREATE TYPE type AS ENUM ('type-a', 'type-b', 'type-c', 'type-d');

CREATE TABLE IF NOT EXISTS "public"."Questions" (
 "question_id" SERIAL,
 "board_id" INT NOT NULL,
 "type" type,
 "data" JSON NOT NULL,
 "etag" TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
 "is_deleted" BOOLEAN NOT NULL DEFAULT false, 
 CONSTRAINT "questions_pkey" PRIMARY KEY ("question_id")
);

ALTER TABLE "public"."Questions" SET (fillfactor = 100);

ALTER TABLE ONLY "public"."Questions" 
ADD CONSTRAINT "boards_pkey" 
FOREIGN KEY (board_id) REFERENCES "Boards"(board_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;