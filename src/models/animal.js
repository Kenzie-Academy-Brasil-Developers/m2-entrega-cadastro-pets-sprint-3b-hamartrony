const db = require('../mock/db')

class AnimalClass {
    constructor({name, animal = '', weigth = '', color = '', breed = ''}){
        this.id             = this.idGenerator()+1
        this.name           = name
        this.animal         = animal
        this.weigth         = weigth
        this.color          = color
        this.breed          = breed
        this.createdAt      = this.dateGenerator()
        
    }

    idGenerator(){
        let id = 0
        db.animals.forEach(animal => {
            if (animal.id > id){
                id = animal.id
            }
        })
        return id
    }

    dateGenerator(){
        let date = new Date()
        let dateBrazil = date.toUTCString()
        return dateBrazil
    }

    saveToDb(){
        db.animals.push(this)
    }

}

module.exports = AnimalClass