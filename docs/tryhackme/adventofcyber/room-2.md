# Room 2: Linux CLI - Shells Bells

The main objective of this room is to get familiar with the Linux CLI. To connect to a machine, you could use SSH for this.

SSH (Secure Shell) is a cryptographic network protocol used in secure communication between devices. SSH encrypts data using advanced algorithms, such as AES, SHA-256 and is often used when logging in remotely to a computer or a server.

For added security, you could also use a VPN to connect to your machine.

A VPN (Virtual Private Network) is a way to create a secure tunnel between two networks. VPNs are commonly used for an employee to log into their workplace when they are not on site. VPNs are also used where networks do not provide encryption, and are a great way of preventing others from reading your network traffic.

Linux has a powerful command-line interface, allowing you to use and manage the system simply by typing commands on your keyboard. It’s not as hard as it sounds - once you get used to it, maybe you’ll like the CLI more than the graphical interface.

In this task, it told about a few linux commands like:

-  `ls`: list all files in a directory
- `echo`: print something on the terminal
- `cat`: print the contents of a file
- `cd`: to change the current working directory
- `pwd`: to view path of your working directory
- `grep`: to match a particular text from an input given

On a linux machine, if you are searching for something first thing you should look are the hidden files (they start with a dot), which could seen using the command `ls -la`. This feature is used by IT administators to hide system files, by attackers to hide middleware. Also, after that you shoudld search your `/var/log`, where all security events are stored. Log files are usually big, and looking through them is not a great idea. Instead, we could use a tool called `grep` to search for specific texts in a file.

There is one another command called `find`, which recursievely finds the file which matches the reuqired type or name you specified.

Also, we get to know about shell scripts, which are used by IT teams to automate things and by attackers to quickly run malicious commands. There are many features with the CLI, which you could for sure utilise in your shell scripts. They are:

- **Piping**: sned the output from the first command as the input to the second command
- **Redirect**: used to overwrite or append to a file
- **Ampersand**: run the second command only if the first command was succesful

There are many utilities to view and manage your system. For example, `uptime` to see how much your syste, been running, `ip addr` to check your IP address, `ps aux` to list all processes, etc. You could also check username and their hashed passowrd of users by viewing a file `/etc/shadow`. However, you would need root privileges for that.

Root is the default and ultimate Linux user who can do anything on the system. You could switch to the root user by running `sudo su`. Only root user could view and edit the system settings, so this user is often the main target for attackers. If at any moment you want to verify you current user, just run `whoami`.

Every command which you run is getting stored in a file, literally every command. And, that file is a hidden file located in the home directory of that user. The file is named `.bash_history`. For the root user, it is stored in `/root/.bash_history`. For convenience, you could use `history` command, or could use the `cat` command to read the file.
