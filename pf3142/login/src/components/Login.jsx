import React, {useState} from 'react';


function Login() {  

    const [usuario, setUsuario] = useState({
        login : "",
        senha: ""
    })    

    let msg

    const handleChange = e =>{
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }


   const logar = async (e) => {
     e.preventDefault();

     // POST request using fetch with async/await

     const requestOptions = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(usuario),
     };
     const response = await fetch(
       "http://localhost:8080/LojaApp/rest/login/",
       requestOptions
     );
     const data = await response.json()
     if (data.login) {
       sessionStorage.setItem("usuario-validado", data.login);
     }

     
     if(data){
         window.location = "/home"
         console.log(data);
     }else{
         window.location = "/"
        msg = "Usuário ou senha inválida!"
     }
   };

  return(
    <>
        <h1>Login</h1>
        <form onSubmit={logar}>
            <input type="text" name="login" value={usuario.login}
            onChange={handleChange} placeholder="Usuário"
            autoComplete='off' /> <br/>
            <input type="password" name="senha" value={usuario.senha}
            onChange={handleChange} placeholder="Senha" 
            autoComplete='off'/> <br/>
            <button>Logar</button>
            <span style={{"color":"red"}}>{msg}</span>
        </form>

    </>
  );
}

export default Login;        


//    sessionStorage.setItem("usuario-validado","Alexandre")
    // const logar = async(e)=>{

    //     e.preventDefault()

    //     const response = await fetch("http://localhost:8080/LojaApp/rest/login/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(usuario),
    //     })
    //       .then((res) => {
    //         console.log("RESPOSTA : " + JSON.stringify(res))
    //         return res;
    //       })
    //       .then((res) => {
    //         sessionStorage.setItem("usuario-validado", res);
    //         console.log("RESPOSTA : " + res.json())
    //       }).catch((error)=>{console.log(error)});

    //       console.log("RESPONSE " + response)

    // }

    // const logar = async(e)=>{

    //     e.preventDefault()

    //     // POST request using fetch with async/await
        
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(usuario)
    //     };
    //     const response = await fetch(
    //       'http://localhost:8080/LojaApp/rest/login/',
    //       requestOptions
    //     );
    //     const data = await response.text();
    //     if(data == "true"){
    //         sessionStorage.setItem("usuario-validado", usuario.login);
    //     }
    //     console.log(data)
    // }
