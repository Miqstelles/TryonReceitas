import { CaretRight } from 'phosphor-react'
import comida1 from '../assets/comida2.webp'
import comida2 from '../assets/pizza.jpg'
import { motion } from 'framer-motion'

const Content2 = () => {
    return (
        <div className="w-[1300px] h-[560px] flex justify-between">
            <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className="w-[760px] h-[277px] pt-[80px]">
                <h1 className="text-[36px] font-bold text-black">
                    Sobre nosso aplicativo
                </h1>
                <h2 className="text-[24px] pt-[36px] text-black">
                    Nosso aplicativo tem um objetivo simples e pratico!
                </h2>
                <h2 className='text-[24px] pt-[36px] text-black'>
                    Em nosso app você consegue<blockquote>pesquisar por receitas apenas
                    </blockquote><span className="text-white">informando</span> os ingredientes
                    <blockquote>que você quer usar ou que tem <span className="text-white">disponivel!</span></blockquote>
                </h2>
                <div className="pt-[36px]">
                    <button class="bg-brown-300 hover:bg-brown-100 text-black py-2 px-4 rounded-md w-[235px] h-[56px] flex pt-[15px] transition duration-500">
                        <span className="pr-[20px] pt-[1.5px]">Baixe nosso app!</span> <CaretRight className="h-[25px] w-[25px]" />
                    </button>
                </div>
            </motion.div>
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className="w-[380px] pt-[40px]">
                <img src={comida1} className="left-[1000px] top-[720px] rotate-[15.36deg] rounded-2xl" />
                <img src={comida2} className="left-[1000px] top-[720px] rotate-[-9.71deg] rounded-2xl" />
            </motion.div>
        </div>
    )
}

export default Content2