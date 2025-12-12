# Delete a User

```yaml
---
- name: Delete user and remove home directory
  hosts: all
  become: yes
  vars:
    username: "" # enter the username
  
  tasks:
    - name: Remove {{ username }} and delete their home directory
      ansible.builtin.user:
        name: "{{ username }}"
        state: absent
        remove: yes
        force: yes
```