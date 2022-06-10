import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div id="traffic-light">
			<div className="traffic-top"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " glow " : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " glow " : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow " : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
