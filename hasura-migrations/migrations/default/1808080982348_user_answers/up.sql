CREATE TABLE "public"."User_Answers" (
    "User_answer_id" bigserial,
    "question_id" bigserial,
    "user_id" integer,
    "score" integer,
    "data" json DEFAULT '{}',
    CONSTRAINT "User_answer_pkey" PRIMARY KEY ("User_answer_id")
);
ALTER TABLE ONLY "public"."User_Answers" ADD CONSTRAINT "users_pkey" FOREIGN KEY (user_id) REFERENCES "Users"(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."User_Answers" ADD CONSTRAINT "question_pkey" FOREIGN KEY (question_id) REFERENCES "Questions"(question_id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;