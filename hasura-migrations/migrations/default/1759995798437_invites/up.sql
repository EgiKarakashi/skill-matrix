CREATE TABLE IF NOT EXISTS "public"."Invites" (
 "invite_id" SERIAL,
 "user_id" INT NOT NULL,
 "survey_id" INT NOT NULL,
 CONSTRAINT "invites_pkey" PRIMARY KEY ("invite_id")
);

ALTER TABLE ONLY "public"."Invites" 
ADD CONSTRAINT "users_pkey" 
FOREIGN KEY (user_id) REFERENCES "Users"(user_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Invites" 
ADD CONSTRAINT "surveys_pkey" 
FOREIGN KEY (survey_id) REFERENCES "Survey"(survey_id) 
ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
