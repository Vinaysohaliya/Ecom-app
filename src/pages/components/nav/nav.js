import Link from 'next/link';
import Search from '../search';

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
          <Link href="/kids">Baby Collection</Link>
        </li>
        <li className="mx-2">
          <Link href="/aboutus">About Us</Link>
        </li>
        <li className="mx-2">
          <Link href="/contactus">Contact Us</Link>
        </li>
        <li className="mx-2">
          <Link href="/cartItem">cart</Link>
        </li>
        <li className="mx-2">
          <Link href="/signup">signup</Link>
        </li>
        <li className="mx-2">
          <Link href="/signin">signin</Link>
        </li>
      </ul>
      <Search/>
    </nav>
  );
};

export default NavBar;
