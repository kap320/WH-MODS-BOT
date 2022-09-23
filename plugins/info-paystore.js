let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
*––––––『 sᴇᴡᴀ 』––––––*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ Rm1/grup (1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ Rm5/grup (1 bulan)

┏⫹⫺ *sᴛᴀɴᴅᴀʀ* 
┗$ Rm15/grup (2 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ Rm20/grup (3 bulan)

──···────────────────···──

*––––––『 ᴘʀᴇᴍɪᴜᴍ 』––––––*
┏⫹⫺ *ʜᴇᴍᴀᴛ* 
┗$ Rm5(1 minggu)

┏⫹⫺ *ɴᴏʀᴍᴀʟ* 
┗$ Rm10 (1 bulan)

┏⫹⫺ *ɢᴏᴏᴅ* 
┗$ Rm15 (3 bulan)

┏⫹⫺ *ᴘʀᴏ* 
┗$ Rm20 (5 bulan)                                            


*✃ ᴘᴀʏᴍᴇɴᴛ*
• *Pulsa Maxis:* [601127833767]
• *eWallet:* [601151905021]

–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja.. max tawar Rm5

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
