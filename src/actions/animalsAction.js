import { SELECT_ANIMAL, LOAD_ANIMALS } from '../constants'

// fakedata
import animals from '../fakeData/animals'

// config
import { animalsRef } from '../config/firebase'

export const selectAnimal = animalID => ({
    type: SELECT_ANIMAL,
    payload: animals.filter(animal => animal.id === animalID)[0]
})


export const loadAnimals = () => ({
    type: LOAD_ANIMALS,
    payload: animals
})

export const fetchAnimals = () => {
    return dispatch => {
      dispatch({ type: 'START_LOADING' });
      firebaseApp.database().ref('/animals')
        .on('value', snap => {
          let animals = [];
          snap.forEach(animal => {
            const { age, description, name } = animal.val();
            animals.push({age, description, name });
          });
          dispatch({ type: 'END_LOADING' });
        //   const sortByDate = animals.sort(function(a, b) {
        //     var dateA = new Date(a.createdAt),
        //         dateB = new Date(b.createdAt);
        //     return dateB - dateA;
        //   });
        //   console.log(sortByDate);
          dispatch({
            type: 'FETCH_ANIMALS',
            payload: animals
          });
        });;
    };
  };