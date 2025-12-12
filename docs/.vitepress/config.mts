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
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Centinoughty/docs.nadeemsiyam.com",
      },
    ],
  },
});
