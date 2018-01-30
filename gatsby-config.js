module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              classPrefix: 'language-',
              directory: `${__dirname}/examples/`,
            }
          },
          {
            resolve: 'gatsby-remark-code-repls',
            options: {
              // Optional default link text.
              // Defaults to "REPL".
              // eg <a href="...">Click here</a>
              // defaultText: 'Click here',

              // Optional runtime dependencies to load from NPM.
              // This option only applies to REPLs that support it (eg CodeSandbox).
              // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
              // dependencies: [],

              // Example code links are relative to this dir.
              // eg examples/path/to/file.js
              directory: `${__dirname}/examples/`,

              // Optional externals to load from a CDN.
              // This option only applies to REPLs that support it (eg Codepen).
              // eg '//unpkg.com/react/umd/react.development.js'
              // externals: ['https://production-assets.codepen.io/assets/embed/ei.js'],

              // Optional HTML contents to inject into REPL.
              // Defaults to `<div id="root"></div>`.
              // This option only applies to REPLs that support it (eg Codepen, CodeSandbox).
              // eg '<div id="root"></div>'
              // html: '',

              // Optional path to a custom redirect template.
              // The redirect page is only shown briefly,
              // But you can use this setting to override its CSS styling.
              // redirectTemplate: `${__dirname}/src/redirect-template.js`),

              // Optional link target.
              // Note that if a target is specified, "noreferrer" will also be added.
              // eg <a href="..." target="_blank" rel="noreferrer">...</a>
              // target: '_blank',
            },
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-pathdata',
      options: {
        matchNodeType: 'MarkdownRemark',
        extract: [
          {
            name: 'path',
            selector: /.+\/(\d+-\d+-\d+-[\w-]+)\.md$/,
            replacer: '/$1/'
          },
          {
            name: 'date',
            selector: /.+\/(\d+-\d+-\d+)-[\w-]+\.md$/,
            replacer: '$1'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
