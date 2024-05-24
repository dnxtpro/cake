
import {motion,useScroll} from "framer-motion"
export function Principal(){
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)
return(  
    <div className=" pt-9 mx-auto pw-4/5 h-4/5 justify-center flex flex-row space-x-10">
  
  <div className="flex flex-col  justify-items-center">
  <motion.h1 initial={{opacity:0}} animate={{opacity:100}} transition={{duration:4}}  className="font-bold text-center text-9xl text-texto-200">PRUBEA NUESTRA CHEESECAKE</motion.h1>
  <motion.p initial={{opacity:0}} animate={{opacity:100}} transition={{duration:4}}  className="text-texto-100 text-center h-1/5 font-extrabold uppercase font-sans">Envie d'un dessert irrésistible qui combine la onctuosité la plus douce à la texture croquante la plus délicieuse ?</motion.p>
 <div className="flex flex-row justify-center mt-5">
 <motion.img initial={{x:-200,opacity:0}} whileInView={{ opacity: 1 }} animate={{x:0}} transition={{duration:1}} src="./tart2.svg" alt="hola" className=" h-25  justify-center" />
  <motion.img initial={{y:-400}} animate={{y:0}} transition={{duration:1}}src="./tart3.svg" alt="hola" className=" h-25  justify-center" />
  <motion.img initial={{y:-400}} animate={{y:0}} transition={{duration:1}}src="./tart2.svg" alt="hola" className=" h-25 justify-center" />
  <motion.img initial={{x:200}} animate={{x:0}} transition={{duration:1}}src="./tart3.svg" alt="hola" className=" h-25  justify-center" />
  </div> 
</div>
</div>
)
}
export default Principal