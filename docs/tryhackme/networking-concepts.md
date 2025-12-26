# Networking Concepts

This room is to learn more about important netoworking concepts and networking fundamentals. This includes learning about OSI model, IP addresses, subnets, routing, TCP, UDP, port numbers, etc.

## OSI Model

The Open Systems Interconnection (OSI) model is a conceptual model developed by the International Organization for Standardisation (ISO) that describes how communication should occur in a computer network. It standardises the network communication by clearly dividing it into seven distinct layers. They are:

1. Physical Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer
5. Session Layer
6. Presentation Layer
7. Application Layer

The numbering start from physical layer being layer 1, while the top layer, the application layer being layer 7

### Layer 1: Physical Layer

The physical layer, also referred to as layer 1, deals with the physical connection between devices; this includes the medium, such as a wire, and the definition of the binary digits 0 and 1. Data transmission can be via an electrical, optical, or wireless signal. Consequently, we need data cables or antennas, depending on our physical medium.

### Layer 2: Data Link Layer

The physical layer defines a medium to transmit our signal. The data link layer, i.e., layer 2, represents the protocol that enables data transfer between nodes on the same network segment. Let’s put it in simpler terms. The data link layer describes an agreement between the different systems on the same network segment on how to communicate. A network segment refers to a group of networked devices using a shared medium or channel for information transfer. For example, consider a company office with ten computers connected to a network switch; that’s a network segment.

Examples of layer 2 include Ethernet (802.3) and WiFi (802.11). Ethernet and WiFi addresses are `6` bytes.Their address is called MAC address (Media Access Control). They are usually expressed in hexadecimal format with a colon separating each two hexadecimal digits (one byte). The three leftmost bytes identify the vendor and the last three bytes is the unique address for the network interface

### Layer 3: Network Layer

The data link layer focuses on sending data between two nodes on the same network segment. The network layer, i.e., layer 3, is concerned with sending data between different networks. In more technical terms, the network layer handles logical addressing and routing, i.e., finding a path to transfer the network packets between the diverse networks.

In the data link layer, we gave an example of one company office with ten computers, where the data link layer is responsible for providing a connection between them. Let’s say that this company has multiple offices distributed across various cities, countries, or even continents. The network layer is responsible for connecting the different offices together.

Examples of the network layer include Internet Protocol (IP), Internet Control Message Protocol (ICMP), and Virtual Private Network (VPN) protocols such as IPSec and SSL/TLS VPN.

### Layer 4: Transport Layer

Layer 4, the transport layer, enables end-to-end communication between running applications on different hosts. Examples of layer 4 are Transmission Control Protocol (TCP) and User Datagram Protocol (UDP).

### Layer 5: Session Layer

The session layer is responsible for establishing, maintaining, and synchronising communication between applications running on different hosts. Establishing a session means initiating communication between applications and negotiating the necessary parameters for the session. Data synchronisation ensures that data is transmitted in the correct order and provides mechanisms for recovery in case of transmission failures.

Examples of the session layer are Network File System (NFS) and Remote Procedure Call (RPC).

### Layer 6: Presentation Layer

The presentation layer ensures the data is delivered in a form the application layer can understand. Layer 6 handles data encoding, compression, and encryption. An example of encoding is character encoding, such as ASCII or Unicode.

Various standards are used at the presentation layer. Consider the scenario where we want to send an image via email. First, we use JPEG, GIF, and PNG to save our images; furthermore, although hidden from the user by the email client, we use MIME (Multipurpose Internet Mail Extensions) to attach the file to our email. MIME encodes a binary file using 7-bit ASCII characters.

### Layer 7: Application Layer

The application layer provides network services directly to end-user applications. Your web browser would use the HTTP protocol to request a file, submit a form, or upload a file.

The application layer is the top layer, and you might have encountered many of its protocols as you use different applications. Examples of Layer 7 protocols are HTTP, FTP, DNS, POP3, SMTP, and IMAP.

## TCP/IP Model

TCP/IP stands for Transmission Control Protocol/Internet Protocol and was developed in the 1970s by the U.S. Department of Defense (DoD). One of the strengths of this model is that it allows a network to continue to function as parts of it are out of service, for instance, due to a military attack. This capability is possible in part due to the design of the routing protocols to adapt as the network topology changes.

Unlike OSI model, here we 4 important layers:

- **Application Layer**: OSI model's layer 5, 6 and 7
- **Transport Layer**: OSI model's layer 4
- **Internet Layer**: OSI model's layer 3. Network layer of TCP/IP model is called internet layer.
- **Link Layer**: OSI model's layer 2

Many modern networking textbooks show the TCP/IP model as five layers instead of four.

## IP Addresses and Subnets

Every host on the network needs a unique identifier for other hosts to communicate with him. Without a unique identifier, the host cannot be found without ambiguity. When using the TCP/IP protocol suite, we need to assign an IP address for each device connected to the network.

As you might already know, we have IPv4 and IPv6 (IP version 6). IPv4 is still the most common, and whenever you come across a text mentioning IP without the version, we expect them to mean IPv4.

So, what makes an IP address? An IP address comprises four octets, i.e., 32 bits. Being 8 bits, an octet allows us to represent a decimal number between 0 and 255.

The 0 and 255 are reserved for the network and broadcast addresses, respectively. In other words, 192.168.1.0 is the network address, while 192.168.1.255 is the broadcast address. Sending to the broadcast address targets all the hosts on the network. With simple math, you can conclude that we cannot have more than 4 billion unique IPv4 addresses. If you are curious about the math, it is approximately 232 because we have 32 bits. This number is approximate because we didn’t consider network and broadcast addresses.

If you are wondering, a subnet mask of 255.255.255.0 can also be written as /24. The /24 means that the leftmost 24 bits within the IP address do not change across the network, i.e., the subnet. In other words, the leftmost three octets are the same across the whole subnet; therefore, we can expect to find addresses that range from 192.168.66.1 to 192.168.66.254. Similar to what was mentioned earlier, 192.168.66.0 and 192.168.66.255 are the network and broadcast addresses, respectively.

### Private IP Addresses

There are three ranges of private IP addresses:

- `10.0.0.0` - `10.255.255.255` (`10/8`)
- `172.16.0.0` - `172.31.255.255` (`172.16/12`)
- `192.168.0.0` - `192.168.255.255` (`192.168/16`)

### Routing

A router is responisible for forwarding the data packets to the proper network. Usually, a data packet passes through multiple routers before it reaches the final destination. The router opertes at layer 3, inspecting IP addresses and forwards packet to the best network so that the packet gets closer to the destination.

## UDP and TCP

UDP (User Datagram Protocol) allows us to reach a specific process on this target host. UDP is a simple connectionless protocol that operates at the transport layer, i.e., layer 4. Being connectionless means that it does not need to establish a connection. UDP does not even provide a mechanism to know that the packet has been delivered.

An IP address identifies the host; we need a mechanism to determine the sending and receiving process. This can be achieved by using port numbers. A port number uses two octets; consequently, it ranges between 1 and 65535; port 0 is reserved. (The number 65535 is calculated by the expression 216 − 1.)

TCP (Transmission Control Protocol) is a connection-oriented transport protocol. It uses various mechanisms to ensure reliable data delivery sent by the different processes on the networked hosts. Like UDP, it is a layer 4 protocol. Being connection-oriented, it requires the establishment of a TCP connection before any data can be sent.

In TCP, each data octet has a sequence number; this makes it easy for the receiver to identify lost or duplicated packets. The receiver, on the other hand, acknowledges the reception of data with an acknowledgement number specifying the last received octet.

A TCP connection is established using what’s called a three-way handshake. Two flags are used: SYN (Synchronise) and ACK (Acknowledgment). The packets are sent as follows:

- **SYN Packet**: The client initiates the connection by sending a SYN packet to the server. This packet contains the client’s randomly chosen initial sequence number.
- **SYN-ACK Packet**: The server responds to the SYN packet with a SYN-ACK packet, which adds the initial sequence number randomly chosen by the server.
- **ACK Packet**: The three-way handshake is completed as the client sends an ACK packet to acknowledge the reception of the SYN-ACK packet.

## Encapsulation

Encapsulation refers to the process of adding a header to the recieved unit of data and sending the encapsulated data to the layer below.

- **Application Data**: It all starts when the user inputs the data they want to send into the application. For example, you write an email or an instant message and hit the send button. The application formats this data and starts sending it according to the application protocol used, using the layer below it, the transport layer.
- **Segment or Datagram**: The transport layer, such as TCP or UDP, adds the proper header information and creates the TCP segment (or UDP datagram). This segment is sent to the layer below it, the network layer.
- **Network Packet**: The network layer, i.e. the Internet layer, adds an IP header to the received TCP segment or UDP datagram. Then, this IP packet is sent to the layer below it, the data link layer.
- **Data Link Frame**: The Ethernet or WiFi receives the IP packet and adds the proper header and trailer, creating a frame.

## Life of a Packet

1. On the Google search page, you enter your search query and hit enter.
2. Your browser, using HTTPS creates an HTTP request and pushes it to the layer below, i.e., transport layer.
3. The TCP layer needs to establish a connection via a three-way handshake between your browser and the Google server. After establishing the TCP connection, it can send the HTTP request containing the search query. Each TCP segment created is sent to the layer below it, the Internet layer.
4. The IP layer adds the source IP address, i.e., your computer, and the destination IP address, i.e., the IP address of the Google server. For this packet to reach the router, your laptop delivers it to the layer below it, the link layer.
5. Depending on the protocol, The link layer adds the proper link layer header and trailer, and the packet is sent to the router.
6. The router removes the link layer header and trailer, inspects the IP destination, among other fields, and routes the packet to the proper link. Each router repeats this process until it reaches the router of the target server.

## Telnet

The TELNET (Teletype Network) protocol is a network protocol for remote terminal connection. In simpler words, `telnet`, a TELNET client, allows you to connect to and communicate with a remote system and issue text commands. Although initially it was used for remote administration, we can use `telnet` to connect to any server listening on a TCP port number.

- **Echo server**: This server echoes everything you send it. By default, it listens on port 7.
- **Daytime server**: This server listens on port 13 by default and replies with the current day and time.
- **Web (HTTP) server**: This server listens on TCP port 80 by default and serves web pages.

---

## References

[TryHackMe - Networking Concepts](https://tryhackme.com/room/networkingconcepts)
