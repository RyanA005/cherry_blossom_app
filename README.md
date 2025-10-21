This is the repo for the GDG x Engineers Without Borders mobile app development workshop!

to start, clone the project, open it up and enter the command line in the app folder, 

run: npm install    # installs dependancies, make sure you have node+npm installed already as well as expo
run: expo start     # bundles code and starts a debug build

see expo + react native docs for how to actually code here, ill try to leave some descriptve comments all around. see below for some methodology and what this project should do as is.

notice two folders here, app and data. 
  - data contains some of the foundational csv files (tree survey data) behind this project. there are also a number of odd python scripts which i used just to clean that data slightly, upload it to a firebase firestore db, and test that db's functionality along with some other junk.
  - app contains the actual react native + expo project. I will ellaborate more on that when i actually make the app. for now, the app is a template which contains some helper scripts for navigation, interacting with firebase, and whatever else i think will be helpfull so we can spend our demo can be just showing off how fun and easy this is...(very fun and very easy until its firebase time so im doing it for you)


this readme and associated code are written by me, Ryan Alport, feel free to contact me about anything you find here or anything you want to learn more about. Ralport2005@gmail.com is the best way to find me.