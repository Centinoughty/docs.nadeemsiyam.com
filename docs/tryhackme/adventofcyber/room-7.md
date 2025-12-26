# Malware Analysis - Egg-xecutable

## Principle of Malware Analysis

Malware analysis is the process of examining a malicious file to understand its functionality, operation, and methods for defence against it. By analysing such a file we could understand how it operates, and thus how to prevent it. There are two main branches of malware analysis, `static` and `dynamic`. **Static analysis** focuses on inspecting a file without executing it, and **dynamic analysis** involves execution in a controlled environment like a sandbox

## Sandboxes

In cyber security, sandboxes are used to execute potentially dangerous code. These sandboxes are safe, isolated environments where potentially malicious applications can perform their actions without risking sensitive data or impacting other systems. The use of sandboxes is part of the **golden rule** in malware analysis, never run dangerouos applications on devices you care about.

Virtual machines are a popular choice for sandboxing because you can control how the system operates.

## Static Analysis

We use static analysis to gather information about a sample without executing it. Some of the information that can be gathered from ststic analysis are:

- **Checksum**: A checksum is a small, fixed-size block of data generated from a larger block of digital data, acting like a unique "fingerprint" to detect errors or changes (corruption/manipulation) during transmission or storage, ensuring data integrity by comparing the sender's calculated checksum with the receiver's recalculated one. These checksums are used within cyber security to track and catalogue files and executables. For example, you can Google the checksum to see if this has been identified before.

- **Strings**: These are sequence of readable charecters within an executable. This could be, for example, IP addresses, URLs, commands, or even password. This could reveal attackers command infrastructure, which we could use for our defence.

- **Imports**: These are a list of libraries and the functions that the application depends upon. These are useful, especially in Windows, as they allow you to see how the application interacts with the system

- **Resources**: These contain data such as icon that is displayed to the user. Attackers generally uses techniques such as obfuscation

For static analysis, there is a tool called `PeStudio`, which is available for `Windows` devices, with which you could analyse the file.

## Dynamic Analysis

dynamic analysis involves executing the malicious sample to identify its behaviours and how it interacts with the operating system.

### Regshot

It is a widely used utility for analysing malware on Windows. It works by creating two snapshots of the registry - one before the malware is run and another afterwards. The results are compared to identify changes. Malwares aim to establish persistance, which means it seeks to run as soon the device is turned on. A common technique for malware is to add a `Run` key to the registry, which is frequently used to specify which applications are automatically executed when the device is powered on.

Using `RegShot`, we get to see what all registry are modified.

## Process Monitoring

A process monitor like `ProcMon` is used to monitor and investigate how processes are interacting with the `Windows` OS. It is a powerful tool which allows us to see exactly what a process is doing. A process monitor will automatically start capturing events of various processes on the system.
