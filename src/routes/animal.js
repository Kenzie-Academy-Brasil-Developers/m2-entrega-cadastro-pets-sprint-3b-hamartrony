const express           = require('express')
const router            = express.Router()
const AnimalActions     = require('../controllers/animal')


router.get('/', (req, res) => {
    res.status(200).json(AnimalActions.sendAnimal())
    
})



router.post('/', (req, res) => {
    let data = req.body

    if (data.name !== ""){
        const newInsert = AnimalActions.pushAnimal(req.body)
        res.status(201).json(newInsert)
    }
    res.status(400).json('Formato invalido: name ')


})


module.exports = router