This is the read me file for CISC 3140.

All class projects will be in this repository.



*ASSIGNMENT 6 SEE ASSIGNMENT 6 FOLDER*

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



*ASSIGNMENT 7 SEE ASSIGNMENT 7 FOLDER*
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


*ASSIGNMENT 8 TRAVIS SEE ASSIGNMENT 8.MD*

    ASSIGNMENT 8 IS THE TRAVIS FILE IN THIS REPOSITORY. 
    I'M USING ASSIGNMENT 3 TO DEPLOY IT.

    THE URL FOR THE DEPLOYED WEBSITE IS CISC3140.HEROKUAPP.COM

    THE TRAVIS FILE SIMPLY RUNS A TEST (It runs npm test) BEFORE MAKING PULL REQUESTS FROM ANOTHER BRANCH TO THE MASTER BRANCH.
    CURRENTLY, I SET THE TEST TO JUST LOG THAT THERE ARE NO TESTS AND PASS ANY PULL REQUESTS BY EXITTING WITH 0.

    Deployed to cisc3140.herokuapp.com

*ASSIGNMENT 9 GROUP ASSIGNMENT LOG SEE ASSIGNMENT9.MD*
Abrar Sher 

Group Assignment Log

(A lot of my changes are not on git b/c I didn'tc ommit frequently and I kept making changes and removing them. I couldn't decide on how to do a lot of things. It's a lesson learned that I shouldn't be so indecisive.)

Week 1
    Discused Project with Team
    Decided on Chess App

Week 2
    Changed idea from Chess App to Articly
    Reviewed UI and features we want with team


Week 3
    Review features with team
    Discussed what tools we were going to use to build it
    Split work
Week 4
    Review UI and tools we were going to use more with team
    Decided on using firebase as group
    Suggested to use Jquery and Bootstrap

Week 5
    Jian started work on setting up repository
    Discussed repository structure with team

Week 6
    Set up firebase and depositoy structure with team
    Mostly spent this time reviewing Firebase, Jquery, and Bootstrap
    Reviewed a lot of Javascript during this time.

Week 7
    Started work on Search feature, my assigned work.
    Worked on getting the query parameters from the URL
    Tried working on making Navbar accessible in one load with JQuery instead of copy paste every file, but didn't work.

Week 8
    Spent a lot of time adding webpack and node server to project but decided to remove it
    There was no need to complicate it too much, so I kept it static.

Week 9
    Spent more time setting up search parameters.
    Got the API connected to articly and the search working

Week 10
    Refined UI, search features and added more search capabilities

Week 11
    Added advanced search capabilities, cleaned up User Interface and cleaned up code. 
    Got ready for presentation


*ASSSIGNMENT 10 SEE ASSIGNMENT 10.MD LISTING BY PRODUCT METHOD OF TOOLS WE USED*

ABRAR SHER
LISTING BY PRODUCT METHOD

Git/GitHub
* Used to deploy and help with version control for group and self projects
* Integrated Travis CI to automatically test before making pull request
* Integrated with Heroku so Heroku is automatically deployed when pushing to master branch
* Used to view commits of others and keep track of who did what

Heroku
* Deployed my site there, cisc3140.herokuapp.com

Javascript
* For all my front end code both on individual and group projects
* Used ES6 features
* Used promises, const, let keywords, async, await, fetch api, and more

Firebase
* Provided authentication for group project
* Used firestore to store our bookmarks and any other data that we needed to store some place. 
* Learned abot noSQL storage and cloud storage

JQuery
* Helped with front-end development on the group project
* Very common tool, and learning it was very helpful

Node/NPM
* Used to host static server
* Used it for node modules and to generate package.json for individual assignments
* Helped with Heroku deployment and Travis testing by using package.json scripts for easy deployment and testing.

WebPack
* Used for bundling and manage javascript code b/w different versions
* Also used it for webpack-dev-server at times to quickly get a server up and running

Discord
* Real time chat for teammates during group project.

SQL
* Used for assignment 6 in order to generate a table and run queries on the data from the CSV feedback file.

HTML/CSS
* Used for front-end development

Java
* Used for assignent 7 in order to create a simple project to test the makefile on

Travis
* used for continuous integration and automatic testing for branches and deployment

MakeFile
* Used to bundle and compile the Java code
* Also learned it, and now it's very useful for other projects

*EXTRA CREDIT. SEE EXTRA CREDIT FOLDER FOR MORE*

I installed PANDOC by using BREW

* brew install pandoc

I also added Readme files for assignments 6, 9, 10 and other assignments as well. Please view the folders for more.


Here are also the pandoc commands, but they're also in the sh file

pandoc -s -o README.md READMe.pdf

pandoc -s -o ./assignment6/Feedback.md assignment6_Feedback.pdf
pandoc -s -o ./assignment6/SQLReadMe.md assignment6_SQLReadme.pdf

pandoc -s -o ./assignment7/README.md assignment7.pdf

pandoc -s -o assignment8 assignment8.pdf

pandoc -s -o assignment9 assignment9.pdf

pandoc -s -o assignment10 assignment10.pdf