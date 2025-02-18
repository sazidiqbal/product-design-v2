import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center bg-[url('/assets/gradient-bg.jpg')] bg-cover after:p-8 h-[30rem] rounded-3xl bg-slate-100"
    >
      <h2 className="text-[3.5rem]  mb-8">Have a project in mind?</h2>

      <Link
        href="mailto:sazid.design@gmail.com"
        className="text-[2.5rem] text-white bg-[#000000] py-[1.5rem] px-[2rem] font-semibold rounded-full"
      >
        sazid.design@gmail.com
      </Link>
    </section>
  );
};

export default Contact;
