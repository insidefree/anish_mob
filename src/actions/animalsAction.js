import { SELECT_ANIMAL, LOAD_ANIMALS } from '../constants'

// fakedata
import animals from '../fakeData/animals'


export const selectAnimal = animalID => ({
    type: SELECT_ANIMAL,
    payload: animals.filter(animal => animal.id === animalID)[0]
})


export const loadAnimals = () => {
    console.log('my_action')
    return {
        type: LOAD_ANIMALS,
        payload: animals
    }
}