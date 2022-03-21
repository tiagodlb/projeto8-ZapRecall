/* Importações */
import TelaInicial from "./Componentes/TelaInicial"
import TelaPergunta from "./Componentes/TelaPergunta"
import Footer from "./Componentes/Footer"
import Header from "./Componentes/Header"
import { useState } from "react";


const conteudoPerguntas = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]
const conteudoResposta = []
export default function App() {
    const [visivel, setVisivel] = useState(true)

    if (visivel) {
        return (
            <main>
                <article className="container">
                    <section className="logo-TelaInicial">
                        <img src="assets/logo.png" alt="raio"></img>
                        <h1>ZapRecall</h1>
                    </section>
                    <button className="butao" onClick={() => {
                        let container = document.querySelector(".container")
                        container.classList.toggle("fade")
                        setTimeout(() =>{setVisivel(false)},1500)
                    }} >Iniciar Recall!</button>
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <Header />
                {conteudoPerguntas.map((pergunta) => (
                    <TelaPergunta key={pergunta} pergunta={pergunta}></TelaPergunta>
                ))}
                <Footer concluidos={0} sobrando={8}></Footer>
            </main>
        )
    }
}