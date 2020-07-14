import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () =>{
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4)+ '-' + code.substr(8,4) 
}
const fromBase64 = value => {
    const buff = Buffer.from(value, 'base64');
    return buff.toString('ascii');
}


export default async(req, res) =>{
    try{
        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)


        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B3')
        const mostrarPromocao = sheetConfig.getCell(2, 0)
        const descPromocao = sheetConfig.getCell(2, 1) 
        

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocao.value === 'VERDADEIRO'){
            Cupom = genCupom()
            Promo = descPromocao.value
        }



        await sheet.addRow({
            Nome:data.Nome,
            Email:data.Email,
            Whats:data.Whats,
            Nota:data.Nota,
            'DataSend': moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Promo,
            
        })                
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
        
    } catch(err){
        console.log(err)
    }
}