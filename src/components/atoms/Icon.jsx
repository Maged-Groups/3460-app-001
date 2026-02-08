export default function Icon(props) {
    console.log('props.name', props.name);

    // ICONS: ♔♕♖♗♘♙♚♛♜♝♞♟ ▶
    let icon = "";
    switch (props.name) {
        case 'King': icon = '♔'; break;
        case 'Queen': icon = '♕'; break;
        case 'Rook': icon = '♖'; break;
        case 'Bishop': icon = '♗'; break;
        case 'Knight': icon = '♘'; break;
        case 'Pawn': icon = '♙'; break;
        case 'Black King': icon = '♚'; break;
        case 'Black Queen': icon = '♛'; break;
        case 'Black Rook': icon = '♜'; break;
        case 'Black Bishop': icon = '♝'; break;
        case 'Black Knight': icon = '♞'; break;
        case 'Black Pawn': icon = '♟'; break;
    }
    return (
        <span className={`px-2 py-1  text-white ${icon} text-2xl rounded-md
       flex items-center justify-center gap-2 p-3  bg-slate-700  
 hover:bg-slate-600 `}>{icon} {props.name}</span>
    )
}


<Icon name='king' />