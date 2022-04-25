let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/jesucristo.mp3'
conn.sendFile(m.chat, vn, 'jesucristo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /callate|ctm|calla mierda|conchatumare|Aconchatumadre|calla mierda|callateee
handler.command = new RegExp
module.exports = handler
