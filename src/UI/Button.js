import '../styles/Button.css';

const Button = (props) => {
    const clickHandler = () => {
        console.log(props.buttonText);
    }

    return (
        <button className={"button button-" + props.buttonText} disabled={props.disabled} onClick={clickHandler}>
            <span className="button-inner">{props.buttonText}</span>
        </button>
    )
}

export default Button;