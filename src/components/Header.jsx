import { AiOutlineUser } from "react-icons/ai";






const Header = () => {
  return (
    <header className="bg-blue-900 text-white w-full h-12 md:h-36 flex items-center justify-between  sticky top-0 mb-8">
      <div className="container flex justify-between items-center h-14">
        <a href="/">
          <img
            className="w-40 bg-transparent"
            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/294726790/original/aaeb8d1752d87ab4e1d4af060f0c3c16f791f838.jpg"
            alt=""
          />
        </a>

        <div className="">
          <ul className="flex gap-8 font-medium uppercase">
            <a href="./">Home</a>
            <a href="../pages/forms.jsx">Form</a>
            <a href="">Categories</a>
            <a href="">Contact</a>
          </ul>
        </div>

        <div>
          <a href="">
            <AiOutlineUser className="w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" />{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header



























