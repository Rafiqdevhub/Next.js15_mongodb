import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        LearnByHeart
      </Link>
      <Link className="bg-white p-2 rounded" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
