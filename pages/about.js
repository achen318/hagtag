import Layout from '../components/layout';
import Image from 'next/image'
export default function About() {
  return (
    <Layout title="About Us">
      <h1>About Us</h1>
	  <hr></hr>
      <p>HagTag is a daily habit tracker that has useful features to make you more productive!</p>

	  <h2>Features</h2>
	  <ul>
		  <li>Habit streak tracker</li>
		  <li>todo lists</li>
	  </ul>
	  
	  <h2>Name origin</h2>
	  <p>Hackathon → Hagtag</p>

	  <h2>NOT BENGAMIN</h2>
	    <Image

	    src="/../public/images/bonzi monke.png" 
	    alt="BENGAMIN"
	    width="500"
	    height="500"
	  />

	  
	  
    </Layout>
  );
}
