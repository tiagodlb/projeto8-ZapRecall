export default function Footer(props) {
    const {concluidos,sobrando} = props
    return (
        <footer className="Resultado">
            <p>{concluidos}/{sobrando} CONCLUÍDOS</p>
        </footer>
    )
}