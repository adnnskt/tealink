
const bgsensorial = require("../img/sensorial.png") 
const bgcomunicacao = require("../img/comunicacao.png") 
const bgemocional = require("../img/emocional.png") 
const bgfobia = require("../img/fobia.png") 
const bgidentGatilho = require("../img/identGatilho.png") 
const bgrotina = require("../img/rotina.png") 
const bgsocial = require("../img/social.png") 



let jsonList =  [
    {
        id: '1',
        image: bgsensorial,
        txt: 'Sensorial'
    },
    {
        id: '2',
        image: bgcomunicacao,
        txt: 'Comunicação'
    },
    {
        id: '3',
        image: bgemocional,
        txt: 'Emocional'
    },
    {
        id: '4',
        image: bgfobia,
        txt: 'Fobia'
    },
    {
        id: '5',
        image: bgrotina,
        txt: 'Rotina'
    },
    {
        id: '6',
        image: bgsocial,
        txt: 'Social'
    },
    {
        id: '7',
        image: bgidentGatilho,
        txt: 'Sem Gatilho'
    },
]



export {jsonList};