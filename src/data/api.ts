import { ITodo } from '../types/ITodo';

const URL = 'https://dummyjson.com/todos';

const fetchData = async (): Promise<ITodo[]> => { 
  return await fetch(URL)
    .then(result => result.json())
    .then(json => json.todos)
    .catch(error => {
      throw new Error(error);
    });
}

export default fetchData;
