function ButtonArrow(props) {
    return (
        <a className="button-arrow" href="#" role="button">
            {props.buttonText}
            <span class="material-symbols-outlined">subdirectory_arrow_right</span>
        </a>
    )
}

export default ButtonArrow;