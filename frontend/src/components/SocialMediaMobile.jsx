import React from "react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RxResume } from "react-icons/rx";

const SocialMediaMobile = () => {
	return (
		<div className='app__social-mobile'>
			<div>
				<a
					href='https://www.linkedin.com/in/muneth/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				{/* <BsLinkedin /> */}
			</div>
			<div>
				<a href='https://github.com/Muneth' target='_blank' rel='noreferrer'>
					<BsGithub />
				</a>
				{/* <BsGithub /> */}
			</div>
			<div>
				{/* <a href='../assets/cv.png' target='_blank'>
				</a> */}
				<RxResume />
			</div>
		</div>
	);
};

export default SocialMediaMobile;
