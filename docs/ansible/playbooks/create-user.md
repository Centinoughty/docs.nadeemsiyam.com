# Create a User with Home Directory

```yaml
---
- name: Create a User with Home Directory
  hosts: all
  become: yes
  vars:
    username: "" # enter the username
    password: "" # enter the password

  tasks:
    - name: Create the user "{{ username }}"
      ansible.builtin.user:
        name: "{{ username }}"
        password: "{{ password | password_hash('sha512') }}"
        comment: "Created via Ansible"
        shell: "/bin/bash"
        create_home: yes
        home: "/home/{{ username }}"
        state: present
```