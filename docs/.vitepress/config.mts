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
