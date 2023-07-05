import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h1>
        <Link href="/">Home</Link>
        <Link href="/about/us">About us</Link>
        <Link href="/about/someone">About Someone Else</Link>
        <Link href="/listofposts">Posts</Link>
      </h1>
    </div>
  );
};

export default Navbar;
