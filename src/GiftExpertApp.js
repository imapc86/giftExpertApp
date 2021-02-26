import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(["Peaky Blinders"]);

  //const handleAdd = () => { setCategories([...categories, "Otra categoría"]); }; //Forma (1) utilizando solo el operador spread

  //Forma (2) utilizando el callback que se puede emplear en el segundo array del estado, en este caso llamado setCategories
  //const handleAdd = () => { setCategories( cats => [...cats, 'Naruto'] ); };

  //Se elimina el botón y la función para agregar otro componente.

  // Primer componente creado:
  // return (
  //   <>
  //     <h2>GiftExpertApp</h2>
  //     <AddCategory setCategories = {setCategories}/>
  //     <hr />
  //     {/* <button onClick={handleAdd}>Agregar</button> */}
  //     <ol>
  //       {
  //         categories.map((category, i) => {
  //           return <li key={i}> {category} </li>;
  //         })
  //       }
  //     </ol>
  //   </>
  // );

  //Componente con un segundo componente anidado:
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map((category, i) => (
            <GiftGrid 
              key = { i }
              category = {category} 
            />
          ))
        }
      </ol>
    </>
  );


};

export default GiftExpertApp;
