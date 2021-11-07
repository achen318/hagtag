import Layout from '../components/layout';
import Image from 'next/image';
import logo from '../public/images/hagtaglogo.png';
export default function About() {
  return (
    <Layout title="About Us">
		<head>
		<link rel="icon" href={logo} />
		</head>
	    <div className="header-container">
	  		<h1 className="title">HagTag</h1>
			<p className="about">an app designed to make you more productive.</p>
			
			<Image
				src="/../public/images/hagtaglogo.png" 
				alt="hackathon"
				width="250"
				height="250"
			/>
			
	    </div>

	    <div className="mid-container">
	  		
	  		<h1>Features</h1>
			<p>Habit streak tracker</p>
			<p>todo lists</p>

	    	<h1>Name Origin</h1>
	    	<p>Hackathon → HagTag</p>
	    </div>


    </Layout>
  );
}
