import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, deploy, github }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
				</div>
				<button className="p-4 rounded-full font-bold bg-blue-500 hover:bg-blue-700 text-primary-dark dark:text-primary-light"><a target="_blank" href={deploy}>Live Link</a></button>
				<button className="p-4 rounded-full font-bold bg-blue-500 hover:bg-blue-700 text-primary-dark dark:text-primary-light"><a target="_blank" href={github}>GitHub Code</a></button>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
