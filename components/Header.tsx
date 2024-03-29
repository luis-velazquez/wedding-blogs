import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/images/visio_icon.png"
            width={50}
            height={50}
            alt="logo"
          />
          {/* Go Home */}
        </Link>
        <div>VISIO Sound & Lighting</div>
      </div>
      <div>
        <Link
          href="https://www.luentertainmentdtx.com/"
          className="px-5 text-sm md:text-base bg-gray-900 text-cyan-500 flex items-center rounded-full"
        >
          visit our website
        </Link>
      </div>
    </header>
  );
}

export default Header;
