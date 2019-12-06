This is the read me file for CISC 3140.

All class projects will be in this repository.



*ASSIGNMENT 6*
    /* 
        These are all the SQL commands I typed into the terminal.
        Just to make sure, I dropped the database, ran all these commands again
        all at once and they work perfectly.
        NOTE:
            I know I could have changed the name of the columns instead of writing the entire string
            but I originally imported directly before creating the table and it automatically 
            created the table for me. I then used the command " .schema feedback " to
            get the schema. I copy pasted that elsewhere and just editted it to fit the formats
            and add the ID column.
            I also added the ID column in the excel file. 
    */

    .mode csv

    CREATE TABLE feedback(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    "Timestamp" DATETIME,
    "Presentation was well organized" INT,
    "Speaker spoke clearly and was easy to understand." INT,
    "Presenter was enthusiastic about the topic." INT,
    "I learned something new today" INT,
    "What was something new you learned from this presentation that you didn't know before?" TEXT,
    "What worked well for the presentation/presenter?" TEXT,
    "Suggestions for improvement. What are some changes would you advise the presenter to make their presentation more effective?" TEXT,
    "Additional comments for the speaker" TEXT
    );

    .import /Users/abrarsher/downloads/9513.csv feedback

    SELECT 
        AVG("Presentation was well organized"), 
        AVG("Speaker spoke clearly and was easy to understand."),
        AVG("Presenter was enthusiastic about the topic."),
        AVG("I learned something new today")
    FROM feedback;

    SELECT
        MIN("Presentation was well organized"),
        MIN("Speaker spoke clearly and was easy to understand."),
        MIN("Presenter was enthusiastic about the topic."),
        MIN("I learned something new today")
    FROM feedback;

    SELECT
        MAX("Presentation was well organized"),
        MAX("Speaker spoke clearly and was easy to understand."),
        MAX("Presenter was enthusiastic about the topic."),
        MAX("I learned something new today") 
    FROM feedback;



*ASSIGNMENT 7*
    SVN

    =======

    - mkdir /Users/abrarsher/documents/svnrep
    - cd /Users/abrarsher/documents/svnrep
    - svnadmin create project1
    - svn import -m "First import" /Users/abrarsher/Desktop/JavaNoIDE file:///Users/abrarsher/Documents/svnrep/project1
    - svn co file:///Users/abrarsher/Documents/svnrep/project1/trunk /Users/abrarsher/Desktop/JavaNoIDE_work
    - svn commit -m "First commit msg"
    - svn commit -m "Added makefile and tested it"
    - svn update
    - svn log

    GIT
        - git add .
        - git commit -m "Added assignment 7"
        (Since I already had a repository set up)
    MAKE
        Just type in make and it will compile and run the java code.


*ASSIGNMENT 8 TRAVIS*

    ASSIGNMENT 8 IS THE TRAVIS FILE IN THIS REPOSITORY. 
    I'M USING ASSIGNMENT 3 TO DEPLOY IT.

    THE URL FOR THE DEPLOYED WEBSITE IS CISC3140.HEROKUAPP.COM

    THE TRAVIS FILE SIMPLY RUNS A TEST (It runs npm test) BEFORE MAKING PULL REQUESTS FROM ANOTHER BRANCH TO THE MASTER BRANCH.
    CURRENTLY, I SET THE TEST TO JUST LOG THAT THERE ARE NO TESTS AND PASS ANY PULL REQUESTS BY EXITTING WITH 0.

    Deployed to cisc3140.herokuapp.com


