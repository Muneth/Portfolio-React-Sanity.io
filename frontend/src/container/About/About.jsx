import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

// const about = [
// 	{
// 		title: "Front End",
// 		description: "HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS",
// 		img: images.about01,
// 	},
// 	{
// 		title: "Back End",
// 		description: "Node.js, Express.js, MongoDB, MySQL",
// 		imgUrl: images.about02,
// 	},
// 	{
// 		title: "Tools",
// 		description: "Git, Github, VS Code, Chrome Dev Tools, Postman",
// 		img: images.about03,
// 	},
// 	{
// 		title: "Other",
// 		description: "Figma, Adobe Photoshop, Adobe Illustrator",
// 		img: images.about04,
// 	},
// ];

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);

	return (
		<>
			<h2 className='head-text'>
				I Know That
				<span> Good Design</span>
				<br />
				means
				<span> Good Code</span>
			</h2>
			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className='app__profile-item'
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__whitebg",
);
