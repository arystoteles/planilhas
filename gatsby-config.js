module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1DWwl8HV1_fwExoanyuFFaotNHpDpsyhPh3HJLHrXww8',
        worksheetTitle: 'Vendedores',
        credentials: require('./google-credentials.json')
      }
    }
  ]
}