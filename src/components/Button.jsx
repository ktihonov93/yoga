import './Button.css'

export default function Button({ arrowSize, containerWidth, height, transform, border, backgroundColor, borderLeft, borderBottom }) {
    return (
        <a style={{ "height": `${height}`, "transform":`${transform}` }} className="custom-button">
            <div style={{ "--container-width": `${containerWidth}`, minHeight: "100%", backgroundColor: `${backgroundColor}`, "border": `${border}` }} className="custom-button__arrow-container">
                <span style={{ "--arrow-size": `${arrowSize}`, "borderLeft": `${borderLeft}`, "borderBottom": `${borderBottom}` }} className="custom-button__arrow"></span>
            </div>
        </a>
    )
}
