// import "./styles.css"
// import styles from "./Card.module.sass"

const Card = () => {
    const textStyles = {
        color: "blue",
        fontSize: "2rem",
        textAling: "center",
    }
    return (
        <div style={textStyles}>
            Soy una card!
        </div>
    )
}

export default Card;