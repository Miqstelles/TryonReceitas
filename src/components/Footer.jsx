import logo from '../assets/Tryon.png'
import playstore from '../assets/playstore.png'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className="w-full h-[150px] bg-brown-500">
            <div className="flex justify-between">
                <motion.h1 whileInView={{ x: 50 }} transition={{ duration: 0.8 }} className="text-[26px] pt-[50px] pl-[50px]">® 2022 Try on</motion.h1>
                <motion.img initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="w-[130px] pt-[10px]" src={logo} />
                <motion.div whileInView={{ x: -50 }} transition={{ duration: 0.8 }} className="pt-[40px] pr-[50px]">
                    <div className="flex items-center w-[280px] h-[62px] border border-black rounded-md hover:bg-brown-300 transition duration-500 shadow-lg">
                        <img src={playstore} className="h-[50px] w-[50px]" />
                        <h1 className="text-center text-[20px] pl-[20px]">Baixe nosso app</h1>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default Footer