import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className=" bg-amber-800 p-4">
      <ul className="flex justify-around items-center">
        <li className="mx-2">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-2">
          <Link href="/men">Men</Link>
        </li>
        <li className="mx-2">
          <Link href="/women">Women</Link>
        </li>
        <li className="mx-2">
          <Link href="/baby">Baby Collection</Link>
        </li>
        <li className="mx-2">
          <Link href="/about">About Us</Link>
        </li>
        <li className="mx-2">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="mx-2">
          <Link href="/cartItem">cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
