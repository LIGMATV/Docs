export default {
    title: "LIGMATV",
    description: "Hello! Im a (not) too excited developer, im just do it for fun in the free time.",
    lang: 'en-US',
    cleanUrls: true,
    // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
    ignoreDeadLinks: true,

    head: [
        ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/LIGMATV/LIGMATV/main/brand/icon.svg' }]
    ],
    
    themeConfig: {
      logo: "https://raw.githubusercontent.com/LIGMATV/LIGMATV/main/brand/icon.svg",
      siteTitle: "LIGMATV",
      search: {
        provider: "local",
      },

      sidebar: [
        {
          text: "Blog",
          collapsible: true,
          items: [
            { text: "Cara Membuat Intro Sendiri Di Renderforest", link: "/blog/cara-membuat-intro-sendiri-di-renderforest" },
            { text: "Lirik Lagu Mars Deli Serdang", link: "/blog/lirik-lagu-mars-deli-serdang" },
            { text: "Cara Bikin Shutdown Di Windows Lebih Simple Dan Bergaya", link: "/blog/cara-bikin-shutdown-di-windows-lebih-simple-dan-bergaya" },
            { text: "Daftar 195 Nama‐nama Negara Di Dunia Beserta Ibu Kotanya", link: "/blog/daftar-195-nama‐nama-negara-di-dunia-beserta-ibu-kotanya" },
            { text: "Cara Bikin Prank Virus Di Windows #justforfun", link: "/blog/cara-bikin-prank-virus-di-windows-justforfun" },
            { text: "Cara Menyalin Seluruh Filename Dari Folder", link: "/blog/cara-menyalin-seluruh-filename-dari-folder" },
            { text: "Buat Url Shortener Dengan Github Dan Vercel!", link: "/blog/buat-url-shortener-dengan-github-dan-vercel!" },
            { text: "Ebook Html Css Manual Dasar", link: "/blog/ebook-html-css-manual-dasar" },
            { text: "Cara Menambahkan Copyright Di Copy Paste", link: "/blog/cara-menambahkan-copyright-di-copy-paste" },
            { text: "Cara Membuat Ppt Ke Video 60 Fps!", link: "/blog/cara-membuat-ppt-ke-video-60-fps!" },
          ],
        },
      ],

      nav: [
        { text: "Blog", link: "/blog" },
      ],
            // Social Icons
            socialLinks: [
                { icon: "github", link: "https://github.com/LIGMATV/Docs" },
              ],


      // you can disable the previous and next page here

      editLink: {
        pattern: 'https://github.com/LIGMATV/Docs/edit/main/:path',
        text: 'Edit this page on GitHub'
      },
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2020-present LIGMATV",
      },
      // Mobile Config only
      returnToTopLabel: 'Go to Top',
      sidebarMenuLabel: 'Menu',
    },
  };