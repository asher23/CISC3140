
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

THIS IS THE INPUT WITH THE RESPONSE AS WELL

Abrars-Air:Desktop abrarsher$ sqlite3 webApp.db

        SQLite version 3.16.0 2016-11-04 19:09:39
        Enter ".help" for usage hints.

sqlite> .mode csv

sqlite> CREATE TABLE feedback(
   ...>    ID INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   "Timestamp" DATETIME,
   ...>   "Presentation was well organized" INT,
   ...>   "Speaker spoke clearly and was easy to understand." INT,
   ...>   "Presenter was enthusiastic about the topic." INT,
   ...>   "I learned something new today" INT,
   ...>   "What was something new you learned from this presentation that you didn't know before?" TEXT,
   ...>   "What worked well for the presentation/presenter?" TEXT,
   ...>   "Suggestions for improvement. What are some changes would you advise the presenter to make their presentation more effective?" TEXT,
   ...>   "Additional comments for the speaker" TEXT
   ...> );

sqlite> .import /Users/abrarsher/downloads/9513.csv feedback

sqlite> SELECT AVG("Presentation was well organized"), AVG("Speaker spoke clearly and was easy to understand."), AVG("Presenter was enthusiastic about the topic."), AVG("I learned something new today") FROM feedback;

        4.69565217391304,4.34782608695652,4.8695652173913,4.69565217391304

sqlite> SELECT MIN("Presentation was well organized"), MIN("Speaker spoke clearly and was easy to understand."), MIN("Presenter was enthusiastic about the topic."), MIN("I learned something new today") FROM feedback;

        4,3,4,3

sqlite> SELECT MAX("Presentation was well organized"), MAX("Speaker spoke clearly and was easy to understand."), MAX("Presenter was enthusiastic about the topic."), MAX("I learned something new today") FROM feedback;

        5,5,5,5