export default function Video(props){
let gradient="";
let Icon="";
switch (props.gradient){
    case "blue":
       gradient= "from-blue-800 to-blue-600";
        break;
    case 'pink':
       gradient="from-pink-800 to-rose-950";
            break;       
     case 'sky':
        gradient= "from-sky-800 to-cyan-700";
        break;
}
switch (props.Icon){
    case "on":
        Icon="▶️"
}


//▶️//

    return(
       
       <div className="  flex  items-center  gap-5 p-6 w-130  rounded-2xl shadow-md">
      <div className={`h-20 w-40 rounded-2xl  bg-gradient-to-r ${gradient} flex items-center justify-center `}  > 
         {Icon}
      </div>
      <h3 className="text-lg font-medium text-gray-700">{props.title}</h3>
    </div>

    )
}