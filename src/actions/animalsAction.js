import { SELECT_ANIMAL } from '../constants'

// fakedata
import animals from '../fakeData/animals'

export const selectAnimal = animalID => ({
    type: SELECT_ANIMAL,
    payload: animals.filter(animal => animal.id === animalID)[0]
})