import { google } from 'googleapis';
import axios from 'axios';

async function addressToCoord(address) {
    try {
        const response = await axios(
            `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(
                address,
            )}`,
            {
                method: 'GET',
                headers: {
                    'X-NCP-APIGW-API-KEY-ID':
                        process.env.NEXT_NAVER_API_CLIENT_ID,
                    'X-NCP-APIGW-API-KEY':
                        process.env.NEXT_NAVER_API_CLIENT_SECRET,
                },
            },
        );
        return {
            lng: response.data.addresses[0].x,
            lat: response.data.addresses[0].y,
        };
    } catch (error) {
        return error.response.data.reason;
    }
}

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
            range: '2209청년매입_2', // sheet name
        });

        const rows = response.data.values;
        const attributes = rows.shift();
        if (rows.length) {
            const result = rows.map((row) => {
                let instance = {};
                attributes.forEach((attribute, index) => {
                    instance[attribute] = row[index];
                });
                return instance;
            });
            return await Promise.all(
                result.map(async (row) => {
                    const coord = await addressToCoord(row.주소);
                    return { ...row, ...coord };
                }),
            );
        }
    } catch (err) {
        console.log(err);
    }
    return [];
}
