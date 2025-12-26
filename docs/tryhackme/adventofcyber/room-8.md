# Network Discovery - Sant-ta Clause

The objective of the room is to regain access to a compromised server by:

- discovering exposed network services
- interacting with them using appropriate tools
- enumeration of internal services

## Important Concepts

- TCP and UDP both have 65535 ports
- Services listen on ports to accept connections
- Default ports can be changed intentionally to evade detection
- Non standard ports doesn't mean they are secure

## TCP Scan

The initial enumeration could be done using a tool called `nmap`. This tool scans the top `1000` common TCP ports by default.

```bash
nmap MACHINE_IP # Scans the top 1000 ports
```

```bash
nmap -p- --script=banner MACHINE_IP # Full TCP scan
```

`-p-`: Scans all the 65535 ports
`--script=banner`: identifies services even on unknown ports

Attackers often hide services on high ports to avoid casual scans

If there is any unknown service, and there exist no standard client, you could use `netcat` to estanlish raw TCP connection

## UDP Scan

Many attackers only scan TCP, UDP services often contain hidden or legacy functionalities like DNS.

```bash
nmap -sU MACHINE_IP
```

## Key Takeaway

If there is an open port, and you have a way to talk to it, you can often break it
