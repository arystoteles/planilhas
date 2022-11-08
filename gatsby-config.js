module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '',
        worksheetTitle: 'Vendedores',
        credentials: require('./google-credentials.json')
      }
    }
  ]
}