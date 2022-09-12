import { google } from 'googleapis';
export async function getSpreadSheetData() {
    try {
        const target = [
            'https://www.googleapis.com/auth/spreadsheets.readonly',
        ];
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target,
        );

        const sheets = google.sheets({ version: 'v4', auth: jwt });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: '2206청년매입', // sheet name
        });

        const rows = response.data.values;
        const attributes = rows.shift();
        if (rows.length) {
            return rows.map((row) => {
                let instance = {};
                attributes.forEach((attribute, index) => {
                    instance[attribute] = row[index];
                });
                return instance;
            });
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}
