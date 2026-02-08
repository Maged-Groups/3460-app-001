export default function FormInput(props) {

    /**
     * Props
     * label => text above the input
     * type => the input type (text, number, date, etc.)
     */

    return (
        <div className={`border rounded-md mb-3 flex gap-2`}>
            <label htmlFor="" className="bg-gray-100 px-2 whitespace-nowrap flex items-center">{props.label ?? "Extra info" }</label>
            <input type={props.type ?? 'text'} className="py-3 w-full outline-0" />
        </div>
    )
}