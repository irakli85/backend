const mongoose = require('mongoose')

const Schema = mongoose.Schema

const declarationSchema = new Schema({
    cNumber: {
        type: Number,
        required: true
    },
    regDate: {
        type: String,
        required: true
    },
    warehouseName: {
        type: String,
        required: true
    },
    warehouseNum: {
        type: Number,
        required: true
    },
    senderCountry: {
        type: String,
        required: true
    },
    reciverCountry: {
        type: String,
        required: true
    },
    border: {
        type: Number,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    reciver: {
        type: String,
        required: true
    },
    declarant: {
        type: String,
        required: true
    },
    declarantNum: {
        type: Number,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    hs: {
        type: Number,
        required: true
    },
    net: {
        type: Number,
        required: true
    },
    brutto: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    tank: {
        type: String,
        required: true
    },
    procedure: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Declaration', declarationSchema)




