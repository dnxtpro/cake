import { Diameter } from "lucide-react"
import {motion} from "framer-motion"
export function Entrega (){
    return(

<div className=" mx-auto h-4/5 mt-10 w-full px-10">
    <p className="text-texto-200 text-7xl font-extrabold uppercase font-sans text-center justify-center"><span className="text-8xl">1</span> CHOISIS TA TAILLE</p>
<div className="flex flex-row justify-evenly space-x-24 align-top">
    <motion.div className="flex flex-col w-1/5 justify-center align-top pb-24">
       <div className="flex flex-row text-texto-100 text-5xl font-extrabold uppercase font-sans text-center justify-center"><p className="">S  </p><Diameter className="ml-4" size={48}  /> <p className="">15cm</p></div> 
<img src="./tam.svg" alt="s" className=" w-full " />
</motion.div>
<div className="flex flex-col w-2/5 justify-center pt-5">
       <div className="flex flex-row text-texto-100 text-5xl font-extrabold uppercase font-sans text-center justify-center"><p className="">M  </p><Diameter className="ml-4" size={48}  /> <p className="">30cm</p></div> 
<img src="./tam.svg" alt="s" className=" w-full " />
</div>
<div className="flex flex-col w-3/5 justify-center pt-24">
       <div className="flex flex-row text-texto-100 text-5xl font-extrabold uppercase font-sans text-center justify-center"><p className="">L  </p><Diameter className="ml-4" size={48}  /> <p className="">45cm</p></div> 
<img src="./tam.svg" alt="s" className=" w-full " />
</div>
</div>

</div>

        
    )
}