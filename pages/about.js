import Layout from '../components/layout';
import Image from 'next/image'
export default function About() {
  return (
    <Layout title="About Us">
		<head>
		<link rel="icon" href="../public/images/hagtaglogo.png" />
		</head>
	    <div class="header-container">
	  		<h1 class="title">HagTag</h1>
			<p class="about">an app designed to make you more productive.</p>
			
			<Image
				src="/../public/images/hagtaglogo.png" 
				alt="hackathon"
				width="250"
				height="250"
			/>
			
	    </div>

	    <div class="mid-container">
	  		
	  		<h1>Features</h1>
			<p>Habit streak tracker</p>
			<p>todo lists</p>

	    	<h1>Name Origin</h1>
	    	<p>Hackathon → HagTag</p>
	    </div>


    </Layout>
  );
}
