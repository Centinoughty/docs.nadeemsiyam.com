# Foundation

This section covers the absolute basics of Ansible. The goal is to understand the core architecture.

## Core Concepts

Before writing the code, the main four pillars are:

1. **Inventory**: A list of targets (servers/computers) you want to manage.
2. **Modules**: The "tools" in the toolkit (e.g., apt, copy, ping). These do the actual work.
3. **Tasks**: A single definition of "Use this module to do this thing."
4. **Playbooks**: A YAML file containing a list of tasks to run on an inventory.

## The Hello World

### 1. Create Inventory

Create a file named inventory.ini in your project folder. We will target our local machine for now.

```bash
[local]
localhost ansible_connection=local
```

### 2. Run an Ad-Hoc Command

Instead of writing a full script, we use an "ad-hoc" command to test connectivity. Run this in your terminal:

```bash
ansible all -i inventory.ini -m ping
```

- `-i inventory.ini`: tells ansible where your list of servers are
- `-m ping`: tells ansible to use the `ping` module

## Create a Playbook

### 1. Write a Playbook

create a file named `setup.yml`. The `yaml` syntax is important.

```yaml
---
- name: My First Automation
  hosts: localhost
  connection: local
  tasks:
    - name: Create a dummy directory
      ansible.builtin.file:
        path: ~/ansible-test
        state: directory
        mode: '0755'

    - name: Create a welcome file inside the directory
      ansible.builtin.copy:
        content: "Hello World"
        dest: ~/ansible-test/welcome.txt
```

### 2. Run the Playbook

```bash
ansible-playbook -i inventory.ini setup.yml
```

## NOTE

Idempotency is a key Ansible concept. If you run the above ansible playbook above a second time, Ansible will say `changed=0`. It sees the file already exists and matches the desired state, so it does nothing. It does not overwrite unless necessary.

- Ad-hoc commands are for quick tests.
- Playbooks are for repeatable, complex automation.
- Modules (like file and copy) abstract the complexity of OS commands.
