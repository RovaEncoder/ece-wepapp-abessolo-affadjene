import React from "react";
import Image from 'next/image'

const About = ()=>{
<div className="mesInfo">
	<div className="ecrit">
		<h2>ABESSOLO Christ Rova</h2>
		<h5>Dévelopeur</h5>
		<h4>
			<i>Je suis prêt</i> à participer au developpement de vos projets
		</h4>
		<p>
		    <br />
                Etudiant à l’ECE-Paris, je suis à vos sevices et je suis très
                passioné par le developpement web. Cela dit, grace à vous(vos
                missions) je serai capable de mettre en pratique toute mes
                compétences
		</p>
        <div>
            <small>en savoir plus...</small>
        </div>
	</div>
	<div className="photos">
		<img
			className="MyPicture"
			src="../public/images/moi.jpeg"
			alt="Abessolo Christ"
		/>
	</div>
    <div class="mon-equipe">
        <h2>Mon équipes</h2>
        <div class="row-equipe">
            <div class="col-equipes">
                <div class="image-equipe">
                    <Image src="../public/images/roro4.png" alt="roro"></Image>
                </div>
                <div class="info-equique">
                    <p>rova </p>
                    <p>rova@gmail.com</p>
                </div>
            </div>

            <div class="col-equipes">
                <div class="image-equipe">
                    <Image src="../public/images/roro4.png" alt="nabil"></Image>
                </div>
                <div class="info-equique">
                    <p>Nabil </p>
                    <p>Nabil@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default About