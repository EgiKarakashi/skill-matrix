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

CREATE TABLE IF NOT EXISTS "public"."Survey" (
 "survey_id" SERIAL,
 "board_id" INT NOT NULL,
 "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
 "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
 "open_since"  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
 "open_until" TIMESTAMPTZ NOT NULL DEFAULT now() + '1w'::interval,
 CONSTRAINT "surveys_pkey" PRIMARY KEY ("survey_id")
);

CREATE TRIGGER "set_public_surveys_updated_at"
BEFORE UPDATE ON "public"."Survey"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();

COMMENT ON TRIGGER "set_public_surveys_updated_at" ON "public"."Survey" 
IS 'Trigger to set value of column "updated_at" to current timestamp on row update';