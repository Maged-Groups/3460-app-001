export default function Button(props) {
    console.log('props', props);
    console.log('props.title', props.title);

    /**
     * Colors
     * success => green
     * warning => yellow
     * danger => red
     * info => sky
     * default => main theme
     */


    let btnColor = '';
    let radius = '';
    let border = '';
    let color = '';

    if (props.outline) {
        border = 'border';

        switch (props.variant) {
            case 'success':
                color = 'text-green-600 shadow-green-600';
                break;

            case 'warning':
                color = 'text-yellow-600 shadow-yellow-600';
                break;

            case 'danger':
                color = 'text-red-600 shadow-red-600';
                break;

            case 'info':
                color = 'text-sky-600 shadow-sky-600';
                break;

            default:
                color = 'text-gray-600 shadow-gray-600';
        }
    } else {
        switch (props.variant) {
            case 'success':
                btnColor = 'bg-green-600';
                break;

            case 'warning':
                btnColor = 'bg-yellow-600';
                break;

            case 'danger':
                btnColor = 'bg-red-600';
                break;

            case 'info':
                btnColor = 'bg-sky-600';
                break;

            default:
                btnColor = 'bg-gray-600';
        }
    }
    // border-green-600 border


    // rounded-md
    if (props.rounded) {
        radius = 'rounded-md'
    }

    return (
        // <button className={`px-2 py-1 ${btnColor} text-white`}>{props.title}</button>
        <button className={`px-2 py-1 shadow ${border} ${radius} ${btnColor} ${color}`}>{props.title}</button>
    )
}