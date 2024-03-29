const spreadsheetId = "12TQFFRKEhMCzZaB1LctXdoh9J6_QJRzbLMjuH7IlCZE";
const sheetId = 2104729618;

async function getValues(spreadsheetId, range) {
    const {GoogleAuth} = require('google-auth-library');
    const {google} = require('googleapis');
  
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
  
    const service = google.sheets({version: 'v4', auth});
    try {
      const result = await service.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const numRows = result.data.values ? result.data.values.length : 0;
      console.log(`${numRows} rows retrieved.`);
      return result;
    } catch (err) {
      // TODO (developer) - Handle exception
      throw err;
    }
  }

getValues(spreadsheetId, "Sheet1!A1:B2").then((result) => {
    console.log(result.data.values);
});