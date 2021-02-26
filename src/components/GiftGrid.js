import React, {useState, useEffect} from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({category}) => {

  const {data:images, loading} = useFetchGifs(category);

  /**
  * Se puede en enviar la imagen de varias formas al componente:
  * img = {img} 
  * o se puede enviar todos los elementos por propiedad (como sea más comodo), esto se hace con el operador spread
  *  {...img}
  */

  return (
    <>
      <h3>{category}</h3>
      { loading && <p>Cargando... </p>}
      <div className="card-grid">
        {
          images.map((img) => (
            <GiftGridItem
              key ={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  );
};