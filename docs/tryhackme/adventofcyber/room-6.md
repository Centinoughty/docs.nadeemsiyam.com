# IDOR - Santa's Little IDOR

Insecure Direct Object References(IDOR) are a type of access control vulnerabilty that arises application uses user-supplied input to access objects directly. For this we need to know about authentication and authorization, and to spot potential opportunities for IDOR. With IDOR, we could perform horizontal privilege escalation. Also, every IDOR opportunity must be converted to an SDOR.

It is one of the most common and dangerous web application vulnerability. It occurs when the application exposes the internal object identifiers such as `id`, `file_name`, etc. without properly validating wheather the requesting user is authorized to access them.

A lot of people try to fix `IDOR` by encoding `id`. For example, changing `/user/1` to `/user/h3hbdsf`. That might make it look hard to guess, but if the server still is not checking permission it's just insecure. The vulnerability isn't about how the object is refernced, it's about ,missing authorization checks.

## Why IDOR is Dangerous?

IDOR can lead to:

- Unauthorized data disclosure
- Account takeover
- Financial fraud

Many high-profile breaches occur due to **broken access control**, not advanced exploitation

## Terminology

**Authentication**: process by which you verify who you are
**Authorization**: process by which the web application verifies your permissions. For example, are you allowed to visit the admin page of an application, or are you allowed to make a payment using a specific account

You mqay think that authentication happens only once when you supply your username and password, but that's not really the case. When you login for the first time, the server provides you with a cookie or a token, called session information. Every subsequent request you make will include this session information, which is verified by the application. The initial verification process is still authentication, and happens for every request. This is why you are often redirected to the login page. It means that your session has expired and you need to login again to get new session infomation from the server. The session information often has an expiry, it varies from application to application. The shorter the duration gets, more secure it becomes. But, for the sake of user experience, this duration changes.

Authorization cannot happen before authentication. If the application doesn't know who you are, it cannot verify the permission user has. If your IDOR doesn't require you to authenticate, we wil have to fix the authentication first and then think about authorization.

Privilege Escalation types:

- **Vertical Escalation**: This refers to privilege escalation where you gain access to more features. For example, you may be a normal user, but can perform actions that should be restricted for an admin user
- **Horizontal Escalation**: This refers to privilege escalation where you use a feature you are authorized to use, but gain access to data that you are not allowed to access. For example, you should only be able to see your account, not someone else's account

IDOR is usually a form of privilege escalation.

## How to Exploit?

### 1. Obvious Refernces

At times, IDOR could be as simple as a number, which is the `id` or a unique number by which the object is being refernced.

### 2. Encoded Identifiers for Referencing

Sometime, the IDOR may not be as simple as a number. In most cases, encoding may have been used. If you figure out the encoding, problems solved. So, you need to keep the encoding algorithm safe and strong. Using a simple and obvious algorithm like base64, is just not great.

### 3. Hashed Identifiers for Referencing

Encoding isn't the only thing that can be used to hide potential IDOR vulnerabilities. Sometimes, the values may look like has, such as MD5 or SHA1.

Using tools like [hash identifier](https://hashes.com) can help you identify what hashing algorithm is being used and can often tell you what data was hashed. Thes tools helps you understand predictability, and not defeat cryptography. If [hashes.com](https://hashes.com) can crack your hash, your system is already broken.

### 4. UUID

Most of the vouchers which you see in daily life, is in a format of UUID. Using a website called [UUID Decoded](https://www.uuidtools.com/decode), we could understand what UUID format was used. In this room, the voucers used where of UUID version 1. The issue with version 1 is that if we know the exact date the code was generared, we can recover the UUID. For example, if the codes where generated between 20:00 and 21:00, we can generate UUIDs for the entire time period, which is 3600 vouchers, which we could use in a bruteforce attack to aim to recover and claim more gifts

## Takeaways

- IDOR is a logical flaw, not technical exploit
- Authentication ≠ Authorization
- Predictable IDs are dangerous without proper checks
- IDOR vulnerabilties are extremely common in APIs
- Always validate ownership server-side

## Sources

- [What's the deal with IDOR](https://mwrcybersec.com/whats-the-deal-with-idor)
