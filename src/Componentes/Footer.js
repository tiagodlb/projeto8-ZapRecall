import { useState } from "react";
import TelaPergunta from "./TelaPergunta"
import Header from "./Header"

export default function Footer(props, respondidos) {
    const {concluidos,sobrando} = props 
    const { respondido, setRespondido } = useState(0)
    const [icones, setIcones] = useState([])

    function checaSeRespondeu() {
        if (respondido < 4) {
            return <p>{respondido}/4 CONCLUÍDOS</p>
        }
        else {
            if (icones.includes("close-circle")) {
                return (
                    <>
                        <img stc="assets/sad.png" alt="triste"></img>
                        <p>PUTZ</p>
                        <p>Ainda faltaram alguns...\n mas n fica triste n</p>
                    </>
                )
            } else {
                return (
                    <>
                        <img src="assets/party.png"></img>
                        <p>PARABÉNS!</p>
                        <p>Você não esqueceu nenhum!</p>
                    </>
                )
            }
        }
    }

    return (
        <>
            <footer className="Resultado">
                <p>{concluidos}/{sobrando} CONCLUÍDOS</p>
            </footer>
        </>
    )
}