const apiKey = 'yNhz2aHsDslhH95sCx2qTEE6TxgIB5VK';

export const getsGifs = async (category) =>{
    
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  const resp = await fetch(url);
  const {data} = await resp.json();

  //Se pone el signo ? para hacer validación de se existe en la parte de img.images? 
  const gifs = data.map( img => {
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;
}