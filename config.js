/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285788840231', 'Alzhar', true],
  ['6281807702332']
] // Nomor Owner

global.mods = ['6285174306183'] 
global.prems = ['6285174306183', '6285880029379']

// apikey
global.lann = 'Vv8H7Kjn'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'Vv8H7Kjn'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'Alzhar' // nama owner
global.nomor = '6285788840231' // nomor owner
global.nans = 'ZHARTX OFC' // nama bot 
global.thumb = 'https://i.ibb.co/m9YqsDr/neromdv3-2.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/Htt8moVgWyuL3IlCdlTCnO' // link group yang ada di menu

// Sticker wm
global.packname = 'ZHARTX MD┃ᴮᴼᵀ' 
global.author = '@zhartz' 
global.fgig = 'https://www.instagram.com/alzharyokiyaci' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/nanzone' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@alzharnya?si=TLvSzuvIEwRy0yxr' // bebas tapi jangan kosong
global.fgpyp = 'https://www.tiktok.com/@alzharnya?_t=8fUXxXE4DOT&_r=1' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285788840231'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://www.tiktok.com/@alzharnya?_t=8fUXxXE4DOT&_r=1'
global.email = 'alzharmuhammad12@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ Zhartx offc'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})