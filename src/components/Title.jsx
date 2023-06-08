import "../Title.css"

function Title({title}){
    return(
        <div className="title-container">
            <p className="title-text">{title}</p>
        </div>
    )
}
export default Title