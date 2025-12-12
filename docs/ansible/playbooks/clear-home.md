# Clear Home Directory of a User

```yaml
---
- name: Reset User Home Directory (Wipe & Restore)
  hosts: all
  become: yes
  vars:
    username: "" # enter the username

  tasks:
    - name: 1. Remove the existing home directory
      ansible.builtin.file:
        path: "/home/{{ target_user }}"
        state: absent

    - name: 2. Recreate the empty home directory
      ansible.builtin.file:
        path: "/home/{{ target_user }}"
        state: directory
        owner: "{{ target_user }}"
        group: "{{ target_user }}"
        mode: '0750'

    - name: 3. Restore default shell files (from /etc/skel)
      ansible.builtin.shell: "cp -r /etc/skel/. /home/{{ target_user }}/"

    - name: 4. Fix ownership of the restored files
      ansible.builtin.file:
        path: "/home/{{ target_user }}"
        owner: "{{ target_user }}"
        group: "{{ target_user }}"
        recurse: yes
```