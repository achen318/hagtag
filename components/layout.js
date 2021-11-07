import Script from 'next/script';
import { useUser } from '@auth0/nextjs-auth0';

import Image from 'next/image';

import Head_ from './head_';
import Menu from './menu';
import Footer from './footer';

export default function Layout(props) {
  const { user } = useUser();

  // user is logged in, show the full site
  if (user) {
    return (
      <div>
        <Head_ title={props.title} />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />

        <Menu />

        <div className="container">{props.children}</div>

        <Footer />
      </div>
    );
  }

  // user is not logged in, only show landing page
  return (
    <div className="landing-page">
      <Head_ title="Hagtag" />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />

      <Menu />

      <div className="header-container">
        <h1 className="title">HagTag</h1>
        <p className="about">An app designed for productivity</p>

        <Image
          src="/../public/images/hagtaglogo.png"
          alt="HagTag logo"
          width="250"
          height="250"
        />
      </div>

      <div className="mid-container">
        <h1>Features</h1>
        <p>Calendar</p>
        <p>Reminder list</p>

        <h1>Name Origin</h1>
        <p>Hackathon → HagTag</p>
      </div>

      <Footer />
    </div>
  );
}
