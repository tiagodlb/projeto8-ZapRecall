export default function TelaInicial(){
    return(
        <article className="container">
            <section className="logo-TelaInicial">
                <img src="assets/logo.png" alt="raio"></img>
                <h1>ZapRecall</h1>
            </section>
            <button className="butao" onClick={fade} >Iniciar Recall!</button>
        </article>
    )
}

function fade(){
    let container = document.querySelector(".container")
    container.classList.toggle("fade")
}