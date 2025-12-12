# Ping All Hosts

```yaml
---
- name: Check which machines are up
  hosts: all
  vars_files:
    - vault.yml
  gather_facts: no

  tasks:
    - name: Ping the hosts
      ansible.builtin.ping: {}
      register: ping_result
      ignore_errors: yes

    - name: Display reachable hosts
      ansible.builtin.debug:
        msg: "Host {{ inventory_hostname }} is up"
      when: ping_result.ping is defined
```