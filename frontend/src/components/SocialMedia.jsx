import React from "react";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<a href='https://github.com/Muneth'>
					<BsGithub />
				</a>
				{/* <BsGithub /> */}
			</div>
			<div>
				<BsLinkedin />
			</div>
			<div>
				<BsTwitter />
			</div>
		</div>
	);
};

export default SocialMedia;
