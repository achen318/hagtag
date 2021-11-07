import Script from 'next/script';

import Head_ from './Head_';
import Menu from './Menu';
import Footer from './Footer';

export default function Layout(props) {
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
