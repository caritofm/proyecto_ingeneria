export const getAnimales = async()=>{

    try{
        const animales = await fetch("https://api-animales.onrender.com");


        const data = await animales.json();

        return data
    }catch {
        console.log(`El error es ${error}`)
    }
}

getAnimales()
   .then((animales) => {
    console.log(animales)
   })

   .catch((error) =>{
      console.log(`El error es : ${error}`);
   })


