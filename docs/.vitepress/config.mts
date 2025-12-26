import { defineConfig } from "vitepress";

export default defineConfig({
  title: "The Engineer's Handbook",
  description:
    "Clear, organized documentation covering programming, Linux, networking, databases, algorithms, and real-world engineering practices written by Nadeem M Siyam",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Ansible", link: "/ansible/" },
    ],
    sidebar: {
      "/ansible": [
        {
          items: [
            { text: "Introduction", link: "/ansible/" },
            { text: "Installation", link: "/ansible/installation" },
            { text: "Foundation", link: "/ansible/foundation" },
            {
              text: "Playbooks",
              collapsed: true,
              items: [
                {
                  text: "Check hosts",
                  link: "/ansible/playbooks/check-hosts",
                },
                {
                  text: "Clear home dir",
                  link: "/ansible/playbooks/clear-home",
                },
                {
                  text: "Create user",
                  link: "/ansible/playbooks/create-user",
                },
                {
                  text: "Delete user",
                  link: "/ansible/playbooks/delete-user",
                },
              ],
            },
          ],
        },
      ],
      "/blogs": [
        {
          items: [
            { text: "About", link: "/blogs" },
            {
              text: "Ethical Hacking",
              items: [
                { text: "Overview", link: "/blogs/hacking" },
                { text: "Disclaimer", link: "/blogs/hacking/disclaimer" },
                {
                  text: "Docker",
                  collapsed: true,
                  items: [
                    {
                      text: "Privilege Escalation",
                      link: "/blogs/hacking/docker/privilege-escalation",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "/tryhackme/": [
        {
          items: [
            { text: "Introduction", link: "/tryhackme/" },
            {
              text: "Advent of Cyber 2025",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/tryhackme/adventofcyber/" },
                { text: "Room 1", link: "/tryhackme/adventofcyber/room-1" },
                { text: "Room 2", link: "/tryhackme/adventofcyber/room-2" },
                { text: "Room 3", link: "/tryhackme/adventofcyber/room-3" },
                { text: "Room 4", link: "/tryhackme/adventofcyber/room-4" },
                { text: "Room 5", link: "/tryhackme/adventofcyber/room-5" },
                { text: "Room 6", link: "/tryhackme/adventofcyber/room-6" },
                { text: "Room 7", link: "/tryhackme/adventofcyber/room-7" },
                { text: "Room 8", link: "/tryhackme/adventofcyber/room-8" },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Centinoughty/docs.nadeemsiyam.com",
      },
    ],
  },
});
