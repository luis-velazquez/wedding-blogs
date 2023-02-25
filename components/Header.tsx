import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://www.luisvelazquez.me/images/profile_pic.jpeg"
            width={50}
            height={50}
            alt="logo"
          />
          {/* Go Home */}
        </Link>
        <div>The Best Weddings In Dallas</div>
      </div>
      <div>
        <Link
          href="https://www.luisvelazquez.me/"
          className="px-5 text-sm md:text-base bg-gray-900 text-cyan-500 flex items-center rounded-full"
        >
          Visit our website
        </Link>
      </div>
    </header>
  );
}

export default Header;
