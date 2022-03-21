import { useState } from "react";

export default function TelaPergunta(props, { zapAmount }) {
    const { pergunta, respostaPergunta, index } = props
    const [estado, setEstado] = useState(0)
    const [resposta, setResposta] = useState()
    const [respondido, setRespondido] = useState(0)
    let icone = ""
    function mudarEstado(respostas) {
        setEstado(estado + 1)
        setResposta(respostas)
        setRespondido(respondido + 1)
    }
    if (estado === 0) {
        return (
            <div className="teste">
                <article>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck" onClick={() => (
                            setEstado(estado + 1)
                        )}>
                            <p>Pergunta {index + 1}</p>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </section>
                </article>
            </div>
        )

    }

    if (estado === 1) {
        return (
            <div className="teste">
                <article>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck-costa" onClick={() => (
                            setEstado(estado + 1)
                        )}>
                            <p>{pergunta}</p>
                            <img src="assets/setinha.png"></img>
                        </div>
                    </section>
                </article>
            </div>
        )
    }

    if (estado === 2) {
        return (
            <div className="teste">
                <article>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck-costa2">
                            <p>{respostaPergunta}</p>
                            <div className="containerBotao">
                                <div className="nao" onClick={() => (mudarEstado("nao"))}><p>Não Lembrei</p></div>
                                <div className="quase" onClick={() => (mudarEstado("quase"))}><p>Quase Não Lembrei</p></div>
                                <div className="zap" onClick={
                                    () => {
                                        mudarEstado("zap")
                                        zapAmount = 1
                                    }
                                }><p>Zap!</p></div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        )
    }

    if (estado === 3) {
        console.log(resposta)
        if (resposta === "nao") icone = "close-circle";
        if (resposta === "quase") icone = "help-circle";
        if (resposta === "zap") icone = "checkmark-circle";
        return (
            <div className="teste">
                <article className={resposta + "Pergunta"}>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck3">
                            <p>Pergunta {index + 1}</p>
                            <ion-icon name={icone} ></ion-icon>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}