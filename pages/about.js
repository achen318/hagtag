import Layout from '../components/layout';

export default function About() {
  return (
    <Layout title="About Us">
      <h1>About Us<br></h1>
    
      <h4>Anthony Chen</h4>
      <ol>
        <li>Middleware</li>
        <li>Back End</li>
      </ol>
      <h4><br>Sudipta Chakraborty</h4>
      <ol>
        <li>Front End</li>
        <li>Middleware</li>
      </ol>
      <h4><br>Shaurya Sen<br></h4>
      <ol>
        <li>Front End</li>
      </ol>
      <h4><br>Jack Fang<br></h4>
      <ol>
        <li>Front End</li>
      </ol>
      
      <h4><br>Front End<br></h4>
      <ol>
        <li>Deals with what the user sees, GUI/UI, responsive design</li>
      </ol>
      <h4><br>Middleware<br></h4>
      <ol>
        <li>Connects UI and server; mostly deals with features</li>
      </ol>
      <h4><br>Back End<br></h4>
      <ol>
        <li>Deals with server, handles page routing and other stuff</li>
      </ol>

    
    </Layout>
  );
}
