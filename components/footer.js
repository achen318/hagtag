export default function Footer() {
  const date = new Date();

  return (
    <div className="container-fluid p-3 site-theme">
      <p className="text-center">
        &copy; {date.getFullYear()} Sudipta Chakraborty, Anthony Chen, Jack
        Fang, Shaurya Sen. All rights reserved.
      </p>
    </div>
  );
}
