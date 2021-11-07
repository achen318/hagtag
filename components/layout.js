import Script from 'next/script';

import Head_ from './head_';
import Menu from './menu';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head_></Head_>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>

      <Menu></Menu>

      <div className="container">{children}</div>

      <Footer></Footer>
    </div>
  );
}
