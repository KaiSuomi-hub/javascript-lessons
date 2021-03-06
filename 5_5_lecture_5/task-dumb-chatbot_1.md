# Dumb chatbot

Create a chatbot command line program.

You'll be needing some command line input from the user with the following exercise, and for that you'll need the readline-sync package

    npm init
    npm install --save readline-sync

Then, try using it:

    import readline from "readline-sync";
    const answer = readline.question("Give me an answer: ");
    console.log(answer);


## The command line application
This is a really common exercise that almost every programmer does at some point in their career. The reason it’s so common, is because through this you have to use a lot of different types of variables and various operations.

The base for all applications are their UI and this is the case in this application as well. Below you’ll see what your application should say when you run it the first time.

>Hi! I am a dumb chat bot
>You can check all the things I can do by typing 'help'.

Now the after logging out the text above, you will have to wait for the user input. There’s a lot of different options for the user at this point, but let’s define the behavior for the help command first.


## The 'help' command
If the user writes ``help`` in to the command line, the text below should be logged out. You don’t have to worry about the commands listed in the text yet, but this is what your program should do when the user gives you this input. 

```
-----------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
-----------------------------
```

## Sample output of using all commands

### hello command

If the user writes ``hello`` in to the command line, you should open a dialog that asks the **users name** and after that **say hello to user with given name**. Whenever the user answers these questions you should store the answers in to their respective variables. The literal implementation is up to you. Below is a sample dialog described for you. (The bolded text is user input).


>**hello**  
>What is your name?  
>**Dan Ackers**  
>Hello there, Dan Ackers!  


### botInfo command

If the user writes ``botInfo`` in to the command line, you should ``console.log`` info or introduction about the bot itself. Also command ``botInfo`` will **output a counter value of asked questions (commands runned).**

That means like so:  
``hello`` -> ``counter = 1``  
``botInfo`` -> ``counter = 2``  
``botInfo`` -> ``counter = 3``   
etc.  

The implementation is up to you. Below is the dialog described for you. (The bolded text is user input).

>**botInfo**  
>I am a dumb bot. You can ask me almost anything :). You have already asked me *n* questions.  

### botName command
If the user writes ``botName`` in to the command line, you should ``console.log`` **bot's current name**. Bot's default name should be defined (choose your own default name)

The implementation is up to you. Below is the dialog described for you. (The bolded text is user input)

>**botName**  
>My name is currently *current name*. If you want to change it, type botRename.


### botRename command
If the user writes ``botRename`` in to the command line, you should open a dialog that asks the user multiple questions. The implementation is up to you. Below is the dialog described for you. (The bolded text is user input)

>**botRename**  
>Type my new name, please.  
**Arnold**  
>Are you happy with the name Arnold?  
**Yes**  
>I was renamed to Arnold  

or

>**botRename**   
>Type my new name, please.  
**Arnold**  
>Are you happy with the name Arnold?  
**No**  
>Name not changed. My name is ${previousName}.  

``botRename`` will overwrite default/previous name, so if you run ``botName`` after renaming it, you should get renamed name logged out.

### forecast command
If the user writes ``forecast`` in to the command line, you should forecast tomorrows weather randomly from multiple choises.  
The implementation is up to you. Below is an example of desired output.


>**forecast**  
>Tomorrows weather will be....  
>Temperature: 20 celsius degree  
>Cloudy: yes  
>Sunny: no  
>Wind: yes  



### quit command
If the user writes ``quit`` in to the command line, program should quit.