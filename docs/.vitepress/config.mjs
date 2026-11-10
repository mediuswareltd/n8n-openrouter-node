import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "n8n OpenRouter Node",
  description: "An n8n community node for sending prompts to OpenRouter models including GPT-4o, Claude, Gemini, Llama, and more.",
  base: '/n8n-openrouter-node/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo.svg', alt: "n8n OpenRouter Node" },
    siteTitle: "n8n OpenRouter Node",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Getting started', link: '/getting-started' },
      {
        text: 'GitHub',
        link: 'https://github.com/mediuswareltd/n8n-openrouter-node'
      }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Guide', link: '/guide' },
          { text: 'About', link: '/about' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mediuswareltd/n8n-openrouter-node' }
    ],
    footer: {
      message: 'Built by Mediusware',
      copyright: 'Copyright © Mediusware Ltd'
    },
    editLink: {
      pattern: 'https://github.com/mediuswareltd/n8n-openrouter-node/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    outline: [2, 3]
  }
,
  vite: {
    css: {
      postcss: {
        plugins: []
      }
    }
  }
})
