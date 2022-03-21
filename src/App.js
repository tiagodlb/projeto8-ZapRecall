/* Importações */
import TelaInicial from "./Componentes/TelaInicial"
import TelaPergunta from "./Componentes/TelaPergunta"
import Footer from "./Componentes/Footer"
import Header from "./Componentes/Header"
import { useState } from "react";


const conteudoFlashCard = [{
    pergunta: "O que é JSX?",
    respostaPergunta: "JSX é uma extensão de linguagem do JavaScript",
},
{
    pergunta: "React é...",
    respostaPergunta:
        "React é uma biblioteca JavaScript para construção de interfaces",
},
{
    pergunta: "Componentes devem iniciar com...",
    respostaPergunta: "Componentes devem iniciar com letra maiúscula",
},
{
    pergunta: "Podemos colocar __ dentro do JSX",
    respostaPergunta: "Podemos colocar expressões dentro do JSX",
},
{
    pergunta: "O ReactDOM nos ajuda...",
    respostaPergunta:
        "O ReactDOM nos ajuda interagindo com a DOM para colocar componentes React na mesma",
},
{
    pergunta: "Usamos o npm para...",
    respostaPergunta:
        "Usamos o npm para gerenciar os pacotes necessários e suas dependências",
},
{
    pergunta: "Usamos props para...",
    respostaPergunta:
        "Usamos props para passar diferentes informações para componentes",
},
{
    pergunta: "Usamos estado (state) para...",
    respostaPergunta:
        "Usamos estado (state) para dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
},
];

function randomizarFlashCard(cartas) {
    cartas.sort(() => (Math.random() - 0.5));
}

randomizarFlashCard(conteudoFlashCard)
export default function App() {
    const [visivel, setVisivel] = useState(true)
    const [zapAmount, setZapAmount] = useState(0)
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
                        container.classList.add("fade")
                        setTimeout(() => { setVisivel(false) }, 1500)
                    }} >Iniciar Recall!</button>
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <Header />
                {conteudoFlashCard.map((conteudo, index) => (
                    <TelaPergunta key={index} index={index} pergunta={conteudo.pergunta} respostaPergunta={conteudo.respostaPergunta} zapAmount={zapAmount => setZapAmount(zapAmount + 1)}></TelaPergunta>
                ))}
                <Footer concluidos={zapAmount} sobrando={conteudoFlashCard.length}></Footer>
            </main>
        )
    }
}