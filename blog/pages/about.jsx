import React from "react";
import Image from "next/image"
import roro from  "../public/images/roro4.png"
import moi from  "../public/images/moi.jpeg"

export default function About (){
    return(
        <>
        <div className="w-full md:h-screen p-2 flex items-center py-1">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 ">
                <div className="w-full h-auto m-auto shadow-xl shadow-black-300 rounded-xl flex items-center justify-center p-0.5 hover:scale-105 ease-in duration-300 ">
                    <Image className="rounded-xl shadow-xl shadow-black-500"src={moi} width={400} height={450} alt="moi"/>
                </div>
                <div className="col-span-2 bg-gray-300 p-3">
                    <h3 className="py-1">ABESSOLO Christ Rova</h3>
                    <p className="py-1">
                        Etudiant à l’ECE-Paris, je suis à vos sevices et je suis très
                        passioné par le developpement web. Cela dit, grace à vous(vos
                        missions) je serai capable de mettre en pratique toute mes
                        compétences
                    </p>
                    <h4>
                    <i>Je suis prêt</i> à participer au developpement de vos projets
                    </h4>
                    <div className="py-1">
                        <p>github </p>
                        <p>github </p>
                        <p>rova@gmail.com</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}


