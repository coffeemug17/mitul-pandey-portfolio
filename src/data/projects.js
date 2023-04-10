// Import images
import cards from '../images/cards.jpg';
import aeromate from "../images/aeromate.jpg";
import linkedup from "../images/LinkedUp.jpg";
import workflowwiz from "../images/workflowwiz.jpg"

export const projectsData = [
	
	{
		id: 1,
		title: 'LinkedUp',
		category: 'Full-Stack Application',
		img: linkedup,
		deploy: "https://linked-up.herokuapp.com/",
		github: "https://github.com/coffeemug17/LinkedUp"
	},
	{
		id: 2,
		title: 'Workflow Wiz',
		category: 'Full-Stack Application',
		img: workflowwiz,
		deploy: "https://workflowwiz.herokuapp.com/",
		github: "https://github.com/coffeemug17/workflowwiz"
	},
	{
		id: 3,
		title: 'Remembrance Rumble',
		category: 'Web Application',
		img: cards,
		deploy: "https://coffeemug17.github.io/remembrance-rumble/",
		github: "https://github.com/coffeemug17/remembrance-rumble"
	},
	{
		id: 4,
		title: 'Aeromate',
		category: 'Full-Stack Application',
		img: aeromate,
		deploy: "https://aeromate.herokuapp.com/",
		github: "https://github.com/coffeemug17/aeromate"
	},
];
