import "../style-sheets/InputText.css"

export const InputText = ({ handleClick }) => {
    return (
        <div className="container-input">
            <h3>Add a Task</h3>
            <input className="input-text" type="text"></input>
            <div onClick={handleClick} className="button-send">
                <p>Send</p>
            </div>
        </div>
    )
}