function dados(){
    const ds = [
                 {id: 1, login:"john", password:"1234", email:"john@gmail.com"},
                 {id: 2, login:"paul", password:"123",  email:"paul@gmail.com"},
                 {id: 3, login:"ringo", password:"12",  email:"ringo@gmail.com"},
                 {id: 4, login:"george", password:"1",  email:"george@gmail.com"}
               ]
    const json = JSON.stringify(ds) // Tranfosrma em  JSON
    localStorage.setItem("banco", json) // Chave
}

function meulogin (){ //Chama no botão do HTML
  const ds =  JSON.parse(localStorage.getItem("banco")) // Convertendo para vetor
  let lg = document.querySelector("#login").value // Pega o elemento no HMTL
  let ps = document.querySelector("#pass").value // Pega o elemento no HMTL

  for(let i = 0; i <ds.length; i++){ //Confere todas as posições
    if(lg == ds[i].login && ps == ds[i].password){ // Comparando o HTML com o Vetor
      
      const usuario = JSON.stringify(ds[i]) //Recebe dados do user logado
      sessionStorage.setItem("user", usuario)// Coloca na seção
      alert("Logou") //Teste para ver se funciona
    }
  }
}