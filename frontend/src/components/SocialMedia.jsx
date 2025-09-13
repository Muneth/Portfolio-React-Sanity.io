import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RxResume } from "react-icons/rx";
import { GiDiploma } from "react-icons/gi";
import Pdf from "../assets/CV.pdf";
import diploma from "../assets/diploma.jpeg";

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<a
					href='https://www.linkedin.com/in/muneth/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a href='https://github.com/Muneth' target='_blank' rel='noreferrer'>
					<BsGithub />
				</a>
			</div>
			{/* <div>
				<a href={Pdf} target='_blank' rel='noreferrer'>
					<span>CV</span>
				<RxResume />
				</a>
			</div> */}
			<div>
				<a href={diploma} target='_blank' rel='noreferrer'>
			<GiDiploma />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
