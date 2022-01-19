const db            = require('../mock/db')
const AnimalClass   = require('../models/animal')

class AnimalActions{

    static sendAnimal(){
           return db.animals
    }

    static pushAnimal(data){
        const newAnimal = new AnimalClass(data)
        newAnimal.saveToDb()
        return newAnimal
    }




}

module.exports = AnimalActions