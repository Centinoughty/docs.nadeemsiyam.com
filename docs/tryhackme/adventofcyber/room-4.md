# Room 4: Splunk Basics - Did you SIEM?

Modern security operations generate massive volumes of logs every second. Firewalls, servers, applications, authentication systems, etc. Without proper visibility, detecting malicious activity becomes nearly impossible. This is where we use **Splunk**, a popular **Security Information and Event Management** platform, and demostrates how defenders use it to search, analyze, and correlates security events.

A SIEM system collects logs from various sources, normalizes them, and allows analysts to detect malicious behaviour. And, Splunk is a tool which is powerful enough to ingest logs from multiple sources, allowing fast searching using Search Processing Language (SPL).

## Anomaly Detection

The investigation begins by identifying anomalies in the web traffic logs. Rather than looking for a single alert, the goal is to observe patterns that deviate from normal behavior.

### 1. User Agent Analysis

Examining the `user_agent` field helps determine whether requests originate from legitimate browsers or automated tools. While normal traffic typically includes common browser identifiers, a large number of non-browser user agents often suggests scripted or malicious activity.

This distinction is crucial, as attackers rarely rely on standard browsers during exploitation.

### 2. Client IP Analysis

Aggregating suspicious requests by client IP address helps identify the source of malicious activity. In this case, one IP clearly stood out, responsible for the majority of abnormal requests. This IP became the focal point for the rest of the investigation.

### 3. Path analysis

Reviewing the path field revealed repeated attempts to access:

- Hidden configuration files
- Sensitive system paths
- Backup archives

Such patterns strongly indicate active probing and exploitation attempts, rather than benign user behavior.

## Tracing the Attack Chain

Once the attacker IP was identified, the next step was to trace the attack chronologically. This helped confirm the tools, techniques, and intent behind each phase of the intrusion.

### 1. Reconnaissance

Reconnaissance is the initial phase of most attacks. Here, attackers gather information about the target’s environment to identify vulnerabilities and potential entry points. This often includes:

- Probing for exposed configuration files
- Testing known paths
- Using lightweight tools such as curl and wget

The logs revealed multiple reconnaissance attempts, indicating the attacker was mapping the system before moving forward.

### 2. Enumeration

Following reconnaissance, the attacker attempted enumeration, searching for exploitable weaknesses. This phase included testing for:

- Path traversal vulnerabilities
- Open redirects
- Access to sensitive system files

Path traversal attacks are particularly dangerous, as they aim to read files outside the intended web directory structure.

### 3. SQL Injection Attack

The logs also revealed the use of automated SQL injection tools, identifiable through specific user-agent strings and payload patterns.

SQL injection remains one of the most impactful vulnerabilities, allowing attackers to manipulate databases, extract sensitive data, or disrupt services. Detecting these attempts early is critical to limiting damage.

### 4. Exfiltration Attempts

Once access was established, the attacker attempted to download large and sensitive files, such as backups and log archives. These requests indicate an effort to exfiltrate data for further exploitation or extortion.

### 5. Remote Code Execution

The final stage of the attack involved Remote Code Execution (RCE). By exploiting a vulnerable endpoint, the attacker was able to execute commands remotely, effectively gaining full control over the web server.

At this point, the compromise was complete, and the attacker could deploy additional payloads or ransomware.
