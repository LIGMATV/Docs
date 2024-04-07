export default {
    title: "LIGMATV",
    description: "Hello! Im a (not) too excited developer, im just do it for fun in the free time.",
    lang: 'en-US',
    cleanUrls: true,
    // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
    ignoreDeadLinks: true,

    head: [
        ['link', { rel: 'icon', href: '/img/logo.svg' }]
    ],
    
    themeConfig: {
      logo: "/img/logo.svg",
      siteTitle: "LIGMATV",
      search: {
        provider: "local",
      },

      sidebar: [
        {
          text: "Blog",
          collapsed: true,
          items: [
            { text: "Intro", link: "/blog" },
            
            { text: "Cara Membuat Ppt Ke Video 60 Fps!", link: "/blog/cara-membuat-ppt-ke-video-60-fps" },
            { text: "Cara Menambahkan Copyright Di Copy Paste", link: "/blog/cara-menambahkan-copyright-di-copy-paste" },
            { text: "Ebook Html Css Manual Dasar", link: "/blog/ebook-html-css-manual-dasar" },
            { text: "Buat Url Shortener Dengan Github Dan Vercel!", link: "/blog/buat-url-shortener-dengan-github-dan-vercel" },
            { text: "Cara Menyalin Seluruh Filename Dari Folder", link: "/blog/cara-menyalin-seluruh-filename-dari-folder" },
            { text: "Cara Bikin Prank Virus Di Windows #justforfun", link: "/blog/cara-bikin-prank-virus-di-windows-justforfun" },
            { text: "Daftar 195 Nama‐nama Negara Di Dunia Beserta Ibu Kotanya", link: "/blog/daftar-195-nama‐nama-negara-di-dunia-beserta-ibu-kotanya" },
            { text: "Cara Bikin Shutdown Di Windows Lebih Simple Dan Bergaya", link: "/blog/cara-bikin-shutdown-di-windows-lebih-simple-dan-bergaya" },
            { text: "Cara Bikin Shutdown Di Windows Lebih Simple Dan Bergaya", link: "/blog/cara-bikin-shutdown-di-windows-lebih-simple-dan-bergaya" },
            { text: "Lirik Lagu Mars Deli Serdang", link: "/blog/lirik-lagu-mars-deli-serdang" },
            { text: "Cara Membuat Intro Sendiri Di Renderforest", link: "/blog/cara-membuat-intro-sendiri-di-renderforest" },
          ],
        },
        {
          text: "Other",
          items: [
            {
              text: "Gravesoft",
              collapsed: true,
              items: [
                { text: "Intro", link: "/gravesoft/intro" },
                {
                  text: "Our Software",
                  items: [
                    { text: "Template", link: "/gravesoft/our_software/template" },
                  ],
                },
                {
                  text: "Download Windows / Office",
                  items: [
                    { text: "Windows", link: "/gravesoft/download_windows_office/download_windows" },
                    { text: "Office C2R Installer", link: "/gravesoft/download_windows_office/office_c2r_links" },
                    { text: "Office C2R Custom Install", link: "/gravesoft/download_windows_office/office_c2r_custom" },
                  ],
                },
                {
                  text: "Guides",
                  items: [
                    { text: "Bypass Russian Geoblock", link: "/gravesoft/guides/bypass-russian-geoblock" },
                    { text: "In-place Repair Upgrade", link: "/gravesoft/guides/in-place_repair_upgrade" },
                  ],
                },
                { text: "Gravesoft News", link: "https://gravesoft.dev/news" },
                { text: "Troubleshooting", link: "/gravesoft/troubleshoot" },
                { text: "Credits", link: "https://gravesoft.dev/credits" },
              ],
            },
            {
              text: "Microsoft Activation Scripts",
              collapsed: true,
              items: [
                { text: "Intro", link: "/massgrave/intro" },
                { text: "FAQ", link: "/massgrave/faq" },
                { text: "Troubleshoot", link: "/massgrave/troubleshoot" },
                { text: "Download Windows/Office", link: "/massgrave/genuine-installation-media" },
                {
                  text: "Docs",
                  items: [
                    { text: "HWID Activation", link: "/massgrave/hwid" },
                    { text: "Ohook Activation", link: "/massgrave/ohook" },
                    { text: "KMS38 Activation", link: "/massgrave/kms38" },
                    { text: "Online KMS Activation", link: "/massgrave/online_kms" },
                    { text: "Command Line Switches", link: "/massgrave/command_line_switches" },
                    { text: "Check Activation Status", link: "/massgrave/check_activation_status" },
                    { text: "Extract $OEM$ Folder", link: "/massgrave/oem-folder" },
                    { text: "Change Edition", link: "/massgrave/change_edition" },
                    { text: "Guide Links", link: "/massgrave/guide_links" },
                    { text: "Unsupported Products Activation", link: "/massgrave/unsupported_products_activation" },
                    { text: "Changelog", link: "https://massgrave.dev/changelog.html" },
                    { text: "Credits", link: "https://massgrave.dev/credits.html" },
                  ],
                },
                { text: "Contact Us", link: "https://massgrave.dev/contactus.html" },
              ],
            },
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
        pattern: 'https://github.com/LIGMATV/Docs/edit/main/docs/:path',
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