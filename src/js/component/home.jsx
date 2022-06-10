import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div id="traffic-light">
			<div className="traffic-top"></div>
			<div className="container">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
};

export default Home;
