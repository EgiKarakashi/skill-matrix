# Day 1.

    * Skill-Matrix is a project where the main goal is to collect data from the survey.This survey will contain many questions for a large amount of users in   different timestamps.
      * First we discussed with each other we decided to collect some information, to set some main goals and plan the visual contect of the surveys.
    - After finishing all this we started setting up the database. Down below we have explained how the first day actually went and what each one of us did.

-Sindi's diary
      
     - We worked together as a group to create an logical idea about the requiremnets of the projects

     - Pulled the repo and created the migrations for other tables, after creating them I pushed my changes on GitHub.

-Egi's diary

     - Forked the repository, added collaborators and opened the project from GitPod

     - Created tables,commited and pushed to GitHub

-Admir's diary

    - As a group we worked together to create an logicat idea about the requiremnets

    - Pulled the repository, created tables and pushed my changes

###################################################################################################################################################################

# Day 2.

-Sindi's diary

     - Checking the changes that were made by my team mates than fixed my tables.

     - Pushed the changes of the tables in git.

-Egi's diary

     - Added Hasura metada migration.

     - Created the seeds

-Admir's diary

     -  Made Some changes on seeds and created first view with react

     -  Pushed the changes of the tables and the seeds in git.



####################################################################################################################################################################

# Day 3.

-Sindi's diary

    - Updated the seeds again because my team mates made some changes to the tables, exported the  metadata and pushed the changes in git.

    - After facing some problems in backend decided to turn to Youtube, react docs, hasura docs, stackoverflow etc to be able to improve my skills and face errors better next.

-Egi's diary

    - Started working in frontend to display the start page component.

-Admir's diary

    - Updated the database with the new changes.

    - I tried to create some actions (to fetch the data and show them in frontend after) but we couldnt find an solution because we faced a problem related to "webhook", we talked with the other groups and Rezart for this propblem and we decided to use Rest Endpoints to get the data from Hasura tables.

####################################################################################################################################################################

# Day 4.

-Sindi's diary

     -Tried to built the endpoints,fetched data from the database .

     -Worked with Egi to display the starting page where we faced some errors but our senior colleague Enea helped us.

-Egi's diary

    - Faced some problems with the metadata not working so i exported the metadata again and pushed the changes in git

    - Started working in frontend to display the start page component. Managed to connect the Hasura endpoints and get the data from the Answers and Questions tables.

-Admir's diary

    - Changed premissions roles on Hasura

    - Inserted data to questions and answers tables and I created two Rest Enpoints from them, after that Egi managed to show the Questions and Answers in the front end.

    ####################################################################################################################################################################

# Day 5.

\*We started the day motivated and with new energy,but things didn't go as planned. We faced some errors while working on the frontend part and had some diffieculties fixing them. We had to make some changes to the database too. Even there we faced some errors but those were handled talking with each other.

-Sindi's diary

    -I made some changes to the database again because we had some new ideas on progressing with the work .

    -With the changes that were made to the db i also Created a new table and a view.

    -After moving on with the work i noticed that the database wasen't working properly (Hasura wasn't showing all the tables) so i had to fix it again.

    -Together with Admir we noticed that we had forgoten to export the metadata and the tables were untracked.

    -After doing all the needed changes the db was working again and the changes were pushed in github.

-Egi's diary

    - Today mainly worked on the frontend and used React Query to get the data from both Questions and the Answers tables.

    - Faced issues with the display of the data because the data from the query arrives in an array with multiple objects inside that have other arrays inside them.

    - Used info from the Stackover Flow on how to manage the issues but still faced issues do to the requirement of multiple mapping on objects and arrays.

    - Asked help from the mentors and worked with other groups=, managed to solve some of the issues faced but still other issues are pending.

    - Will check online on how to implement the fixes.

-Admir's diary


    -Within the changes that were made in the database i had to update the view, today our main
    goal was to get all questions and aswers from hasura and to post them in different pages in front end.

    -Started by creating some new endpoints to move forward with other steps of the project, Rest Endpoints worked to print only one question in frontend but we faced
    some problems while we were trying to get and show an array with questions and answers, by communicating with the others we created queries to get all the questions and its answers from hasura:

      query MyQuery {
      Questions {
      data
      question_id
      Answers {
      data
          }
        }
      }
    
    -We tried to construct the Query's so we could get only the data that we wanted to show on front end and it was a little bit challenging. 

    -We were able to get all the questions and answers but we faced some problems trying to show in frontend one question with its answers per page.

    - We communicated with our mentors and we are going to try to change the way how queries are structured so we dont have to do multiple mappings to show the data in frontend.

    ####################################################################################################################################################################

# Day 8.

   *Today and during the weekend we made a lot of progress. We meet
    up with each other in a library to work and talk together in a quite place. This turned out to be really productive way and we had
    a lot of things done. We also had a conversation with some of the other team memebers and leaders, and exchanged a lot of ideas 
    with each other and that helped too. So over all it was a really productive weekend.


 -Sindi's diary   
    
    -During those days i mostly worked and helped in the front end part where i styled some of the pages.
    
    -I created some of the layout of the questions in the front end and we talked together to see how to combine them with eachother

    -Today mostly we  worked as a group to seed some more data to the database to use the other types of questions.

    -After doing that we were able to test the other question layouts. Also experimented on how to get the state of the clicked radio button and the slider to set a score to it. 


-Admir's diary

    -After we found a way to show all the answers and questions from hasura in the front end I used Materialized UI to design the front-end. Based on the type of each question we created a new design and a new way of filling the answers. 

    -After that I worked a little bit with the database because we found out that there was some mistakes. We worked to get all the answers that user checks in the front-end by using queryMutations , we are thinking to create a new table in database to post all the answers with the userid so we can calculate the score and the number of questions that each user has not filled yet. 

    -This is our next goal and by communicating with the others and by the help of our mentors we hope to finish this step by tomorrow.

-Egi's diary

    -During the weekend I worked on getting the data from the database to the frontend with the React Query and managed to get it done without any issues.

    -Today we mainly worked as a group to seed some more data to the database to use the other types of questions so we could test the other question layouts. Also experimented on how to get the state of the clicked radio button and the slider to set a score to it. Was having some issue with getting the state of the emoji buttons but will have a look into it with the mentors tomorrow.

    -Our goal for tomorrow is to get the to try and get the answers to the database via the queryMutations and set a score to each answer, will also check the progress of the answered questions as well.


####################################################################################################################################################################

# Day 9.

   *Today was the first day at the office after three days off.First we discussed with each other and we decided to set some main goals to accomplished till the end of the day.
    After that we had a meeting with Semra where we reported what we did during the weekend and what were our goals for today.Right after that we were ready to start with our work
    for today,but first we checked if everything was working right an we noticed some things were missing and some other things needed some fixes and that's what we did next.


-Sindi's diary

    -As we said before the first thing we decided to do was to check if everything was working the way it should.

    -After doing all the testing if the things i worked on were working right i noticed some little problems with the score setting but then i asked Egi (my team lider) and he helped me fix that.

    -Then i made some changes in the question leyouts,where i created a new file called Questtion.module.css where i did some styling. Another advantage of creating this file is that this  
     will help the code to look cleaner and to be more understandable. 

    -After finishing with all those now i'm doing some researches for how to apply POST method to Question.js and to be  able to read user answers from frontend and save them to database. This mutation will be able to add a new row into the database, as a user would give a new answer.

-Egi's diary

    -Worked to set the score state with Admir for the three types of the answers.

    -Worked as well on creating the mutation to post the answers to the database. Managed to make it work but having issues with the data on the database for the answers as it overrides the previous ones. Will check what other way to try and post data to the database.

    -Still have to work on getting the progress of the answered questions.

