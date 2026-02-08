export default function Box(props) {
    return (
        <div className={`border p-4 ${props.clr}`}>
            {props.title}
        </div>
    )
}