import { CaretRight } from 'phosphor-react'
import thumbphonefood from '../assets/phoneandfood.png'
import { motion } from 'framer-motion'

const Content = () => {
    return (
        <div className="w-[370px] h-[200px] sm:w-[1300px] sm:h-[560px] flex justify-between">
            <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className="w-[210px] h-[100px] sm:w-[760px] sm:h-[277px]">
                <h1 className="text-[20px] md:text-[36px] font-bold text-little-black">
                    Está afim de fazer uma <blockquote> comidinha em casa mas tem</blockquote> poucos <span className="text-black">ingredientes</span> para usar?
                </h1>
                <h2 className="hidden md:block text-[24px] pt-[36px] text-little-black">
                    Com o app da
                    <span className="text-black"> TryOn</span> você pode procurar por receitas que contenham apenas os ingredientes que você tem
                    <span className="text-black"> disponivel na sua casa!</span>
                </h2>
                <div className="pt-[36px]">
                    <a href="#c3">
                        <button class="bg-brown-100 hover:bg-brown-500 text-black py-2 px-4 rounded-md w-[150px] h-[33px] md:w-[200px] md:h-[56px] flex md:pt-[15px] transition duration-500">
                            <p className="pr-[40px] pt-[1.5px] text-[10px] md:text-[15px] ">Saiba Mais</p> <CaretRight className="h-[15px] w-[15px] md:h-[25px] md:w-[25px]" />
                        </button>
                    </a>
                </div>
            </motion.div>
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 0.8 }} className="w-[300px] md:w-[480px]">
                <img src={thumbphonefood} />
            </motion.div>
        </div >
    )
}

export default Content