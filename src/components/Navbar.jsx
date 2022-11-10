import React, { useState } from "react";
import { motion } from 'framer-motion'
import logoImg from '../assets/Tryon.png'
import playstore from '../assets/playstore.png'

const Navbar = () => {
    return (
        <div className='w-screen h-[80px] z-10 bg-brown-500 drop-shadow-lg'>
            <div className="flex justify-between items-center w-full h-full">
                <motion.div initial={{ x: -1000 }} animate={{ x: 50 }} transition={{ duration: 0.8 }} className="flex items-center">
                    <h1 className="text-lg font-bold mr-4 sm:text-3xl pl-[20px]"><a href="">Try On</a></h1>
                    <a href=""><img className="w-[90px] h-[63px]" src={logoImg} alt="" /></a>
                </motion.div>
                <motion.div initial={{ x: 1000 }} animate={{ x: -50 }} transition={{ duration: 0.8 }} className="pr-[20px]">
                    <button class="hidden md:block bg-transparent hover:bg-brown-300 text-black font-semibold py-2 px-4 border border-brown-700 rounded-lg dur">
                        Baixe o app
                    </button>
                    <a href=""><img src={playstore} className="w-[50px] md:hidden" /></a>
                </motion.div>
            </div>
        </div >
    )
}

export default Navbar;