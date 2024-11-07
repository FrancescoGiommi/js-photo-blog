/* Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
 utilizzando soltanto HTML e CSS e riproducendo una singola fotografia 
 (usiamo una qualunque immagine a piacimento)
 
 Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra 
ed il titolo abbia una dimensione adeguata */

/* dichiaro l'ID della card da generare */
const postsCardEl = document.getElementById("posts-card");
let cardPost;

/* genero l'immagine richiamndo l'API con fetch */
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);
    /* genero le card con il metodo forEach */
    posts.forEach((post) => {
      postsCardEl.innerHTML += `
        <div class="col-4">
            <div class="card">
              <img class="m-3" src="${post.url}" alt="" />
              <div class="card-body">
                <span class="card-text">
                  ${post.title}
                </span>
              </div>
            </div>
    `;
    });
  });
