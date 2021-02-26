import {useState, useEffect} from 'react';
import { getsGifs } from '../helpers/getsGifs';

export const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });
  
  useEffect(() => { 

    getsGifs(category).then(images => {

      // setstate({
      // 	data: images,
      // 	loading: false
      // });

      //Se agrega un timeOut para ver el efecto de Loading...
      setTimeout(() => {
        setstate({
          data: images,
          loading: false
        });
      }, 2000);

    });

  }, [category]);

  return state;
}