import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#000] rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          <Link href="/">Sazid Iqbal Hussain.</Link>
        </span>
      </div>
      <div className="hidden lg:flex  gap-12 text-md text-zinc-400">
        <Link
          href="#about"
          className=" hover:text-[##000] active:text-black font-medium"
        >
          About
        </Link>
        <Link href="#projects" className="hover:text-[#000]  font-medium">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-[#000] font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
