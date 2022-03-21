import { useState } from "react";
import { useCallback } from "react/cjs/react.production.min";

export default function TelaPergunta(props) {
    const { pergunta } = props
    const [estado, setEstado] = useState(0)
    const [resposta, setResposta] = useState()
    let icone = ""
    function mudarEstado(resposta) {
        let icone = ""
        setEstado(estado + 1)
        setResposta(resposta)
    }
    if (estado === 0) {
        return (
            <div className="teste">
                <article>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck" onClick={() => (
                            setEstado(estado + 1)
                        )}>
                            <p>{pergunta}</p>
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
                        <div className="container-Pergunta-Deck" onClick={() => (
                            setEstado(estado + 1)
                        )}>
                            <p>"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?"</p>
                            <ion-icon name="play-outline"></ion-icon>
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
                        <div className="container-Pergunta-Deck-costa" onClick={() => (
                            setEstado(estado + 1)
                        )}>
                            <p>"zzzzzzzzzzzzzzzzzzzzzz."</p>
                            <div className="containerBotao">
                                <div className="botao" onClick={() => (mudarEstado("nao"))}>não</div>
                                <div className="botao" onClick={() => (mudarEstado("quase"))}>ye</div>
                                <div className="botao" onClick={() => (mudarEstado("zap"))}>yi</div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        )
    }

    if (estado === 3) {
        if (resposta === "nao") icone = "close-circle";
        if (resposta === "quase") icone = "help-circle";
        if (resposta === "zap") icone = "checkmark-circle";
        return (
            <div className="teste">
                <article>
                    <section className="Perguntas">
                        <div className="container-Pergunta-Deck">
                            <p>{pergunta}</p>
                            <ion-icon name={icone} ></ion-icon>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}
