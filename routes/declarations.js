const express = require('express')
const {
    createDec, getDecs, getDec, deleteDec, updateDec
} = require('../controllers/declarationController')


const router  = express.Router()

//GET all declarations
router.get('/', getDecs)

//GET a single declaration
router.get('/:id', getDec)

//POST new dec
router.post('/', createDec)

//DELETE a single declaration
router.delete('/:id', deleteDec)

//UPDATE a single declaration
router.patch('/:id', updateDec)


module.exports = router