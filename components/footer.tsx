import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-center rounded-3xl bg-slate-100 p-5 mt-5 mb-5">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#000] rounded-full" />
        <Link href="/" className="font-medium">
          Sazid Iqbal Hussain.
        </Link>
      </div>

      <p className="font-medium">All rights reserved. © 2022</p>
    </footer>
  );
};

export default Footer;
