import { CaretRight } from 'phosphor-react'
import phonechocoalte from '../assets/phoneandchocolate.png'
import { motion } from 'framer-motion'

const Content3 = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.3 }} className="w-[1300px] h-[560px] flex justify-between">
            <div className="w-[760px] h-[277px] pt-[120px]" id="c3">
                <h1 className="text-[36px] font-bold text-black">
                    É alergico à algum ingrediente?
                </h1>
                <h2 className="text-[24px] pt-[36px] text-black">
                    Em nosso app você consegue remover
                    <blockquote>ingredientes na qual você é alergico!</blockquote>
                </h2>

                <div className="pt-[36px]">
                    <button class="bg-brown-100 hover:bg-brown-500 text-black py-2 px-4 rounded-md w-[235px] h-[56px] flex pt-[15px] transition duration-500">
                        <span className="pr-[20px] pt-[1.5px]">Baixe nosso app!</span> <CaretRight className="h-[25px] w-[25px]" />
                    </button>
                </div>
            </div>
            <div className="w-[800px]">
                <img src={phonechocoalte} />
            </div>
        </motion.div>
    )
}

export default Content3