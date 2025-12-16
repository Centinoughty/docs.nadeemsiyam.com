# Advent of Cyber 2025

## Room I: Advent of Cyber Prep Track

### Password Pandemonium

This task asks me to create a password which is strong, and is not in the breached database. Even the password `P@ssw0rd123` has been flagged. I created a password which matches the requirements:

- A password with atleast 12 charecters
- Include uppercase, lowercase, numbers, and symbols
- Ensure your password is not in the breached database

Strong passwords are one of the most simplest yet most effective defenses against cyber attacks.

### The Suspicious Chocolate.exe

Unknown executable files are one of the most common initial infection vectors in real-world attacks. Attackers often disguise malware as music playlists, images, files, etc. Blindly executing this could lead to malware infections, credential theft, or even system compromise.

Here, in this task I used a tool called `VirusTotal` which is used to analyze a file. Its analysis on the file `chocolate.exe` gave me the info of `49` clean results and `1` report flagged the file malicious. Even though 49 engines reported the file safe, that single malicious detection could not be ignored.

Here, `chocolate.exe` should be considered **malicious** and should not be executed.

### Welcome to the AttackBox!

This task is fairly simple, and its main objective is to get familiar with the linux environment and its navigation. Understanding basic commands are important when it comes to cybersecurity workspaces.

### The CMD Conundrum

This task helps you to get familiar with the Windows Command Prompt. I learnt to use the commands `dir` and `dir /a`.

- `dir` command lists all files in the current directory
- `dir /a` command list all the files including hidden files in the current directory

### Linux Lore

This task focuses on exploring a Linux user environment to uncover hidden information. Since the last login originated from a linux server, and the objective is to investigate his home directory for clues that could explain the strange system behavior.

Since Linux is used  for almost all the servers worldwide, being able to navigate and inspect user directories is a critical skill for defenders.

You need to check for hidden files, as attackers often hide their files using dot-prefixed filenames. Malicious files are often found in user home directories

### The Leak in the List

This task simulates a common defensive scenario where an organisation suspects that employee may have been exposed in a data breach. With emails failing and abnormal behaviour, McSkidy's account beocmes a point of interest. The objective is to determine whether his email appeared in any known data breaches.

Defenders uses services like **Have I Been Pwned** to identify exposed email addresses, and to trigger preventive actions such as passowrd resets.

### WiFi Woes in Wareville

This task tells that for most of the devies which you install, we will be given simple passwords or common passwords in the beginning. It is important that you update the username and password, so that you will reduce the possible attacks.

Also, note that do not use a password which you have used somewhere else because, if your password to one account gets leaked doesn't make your other accounts vulnerable.

### The App Trap

This task is another proof to Principle of Least Privilege (PoLP), a core security concept where users, applications, or systems are granted only the minimum permission/access needed to perform their specific job functions, and nothing more, to minimize damage from errors or breaches.

This is exaclty what happened here, an app was accidentally given access to the password vault.

### The Chatbot Confession

It is okay to use AI tools for your daily works for productivity, but defenders must know how to prevent them from oversharing. You need to make sure that you do not share passwords, tokens, personal or private data, or important URLs, which are in the staging, etc.

It is important that any information with the Chatbot, are really in a vulnerable place, as anyone with the right skills could easily get them. So, make sure that you do not overshare anything with your chatbot.

### The Bunny's Browser Trail

Monitoring logs in a web server, is an important task, which could tell you if you are under an attack or not. Heavy traffic, attacks using bot, are also major concerns which defenders should worry about. For an HTTP request, you could checkout the fields of `User Agent`, which tell about more about the client which is trying to initiate a connection with the webserver. User Agent strings help defenders spot automated or suspicious visitors in network logs.
