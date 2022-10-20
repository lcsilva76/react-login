import React, {useEffect} from 'react';


const verificar = sessionStorage.getItem("usuario-validado")


function Home() {

   useEffect(()=>{
    if(verificar == null){
        window.location = "/"
     }
   },[])
   
        return(
         <>
         {verificar &&(
            <>
             <h1>Home</h1>
             <p>Olá {verificar}, seja bem-vindo!</p>
            </>
         )}
         </>
         )
     


}

export default Home