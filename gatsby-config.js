require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
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
