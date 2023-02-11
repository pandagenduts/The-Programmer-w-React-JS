function ButtonPlay(props) {
    return (
        <a className="button-play" href="#" role="button">
            <span class="material-symbols-outlined">play_arrow</span>
            {props.buttonText}
        </a>
    )
}

export default ButtonPlay;