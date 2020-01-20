module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyeaXFiMsRRHwCKZ`, // may instead specify via env, see below
        tables: [
          {
            baseId: `appf0CVSkmKwVJV4d`,
            tableName: `site-photos`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
        ],
      },
    },
  ],
}
