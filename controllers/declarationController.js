const Declaration = require('../models/declarationModel')
const mongoose = require('mongoose')

//get all decs
const getDecs = async (req, res) => {
    const declarations = await Declaration.find({}).sort({createdAt: -1})

    res.status(200).json(declarations)
}

//get a single dec
const getDec = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such declaration'})
    }

    const declaration = await Declaration.findById(id)

    if(!declaration){
        return res.status(404).json({error: 'no such declaration'})
    }

    res.status(200).json(declaration)
}

//create new dec
const createDec = async (req, res) =>{
    const {cNumber, regDate, warehouseName, warehouseNum, senderCountry, reciverCountry, border, sender, reciver, declarant, declarantNum, vehicle, cargo, hs, net, brutto, duration, tank, procedure, status} = req.body

    //add doc to db
    try{
        const declaration  = await Declaration.create({cNumber, regDate, warehouseName, warehouseNum, senderCountry, reciverCountry, border, sender, reciver, declarant, declarantNum, vehicle, cargo, hs, net, brutto, duration, tank, procedure, status})
        res.status(200).json(declaration)
    } catch(error){
        res.status(400).json({error: error.message})
    }   
}


//delete a dec
const deleteDec = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such declaration'})
    }

    const declaration = await Declaration.findOneAndDelete({_id: id})

    if(!declaration){
        return res.status(404).json({error: 'no such declaration'})
    }

    res.status(200).json(declaration)
}

//update a dec
const updateDec = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such declaration'})
    }

    const declaration = await Declaration.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!declaration){
        return res.status(404).json({error: 'no such declaration'})
    }

    res.status(200).json(declaration)
}


module.exports = {
    getDecs,
    getDec,
    createDec,
    deleteDec,
    updateDec
}