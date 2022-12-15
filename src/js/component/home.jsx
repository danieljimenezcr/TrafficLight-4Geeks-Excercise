import React, { useState } from "react";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")
	return (
		<div className="main-container">
			<div className="poste">
			</div>
			<div className="semaforo">
				<div onClick={() => setColor("rojo")} className={`luz rojo ${"rojo" == color ? " activo" : ""}`}> </div>
				<div onClick={() => setColor("amarillo")} className={`luz amarillo ${"amarillo" == color ? " activo" : ""}`}></div>
				<div onClick={() => setColor("verde")} className={`luz verde ${"verde" == color ? " activo" : ""}`}></div>
			</div>
		</div>
	);
};

export default Home;
