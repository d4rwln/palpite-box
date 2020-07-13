import { GoogleSpreadsheet } from 'google-spreadsheet'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {


    try {

        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key:process.env.SHEET_PRIVATE_KEY
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B3')
        const mostrarPromocao = sheet.getCell(2, 0)
        const descPromocao = sheet.getCell(2, 1)
        console.log(mostrarPromocao.value)
        console.log(descPromocao.value)

        res.end(JSON.stringify({
            showCoupon: mostrarPromocao.value === 'VERDADEIRO',
            message: descPromocao.value
        }))
    }
    catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}

