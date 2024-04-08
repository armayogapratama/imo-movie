import Image from "next/image";
import imo from "../../public/logo/imo-watch.png";
import { FaHome } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-row mx-[4rem] gap-5 mt-[1rem]">
      <div className="flex flex-col gap-14 mr-[3rem]">
        <div className="flex flex-row gap-2 items-end">
          <Image src={imo} width={80} height={80} />

          <h1 className="text-xl font-bold text-orange-500">IMO-WATCH</h1>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Menu</h1>

          <div className="ml-[.1rem]">
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <FaHome />
              <h3>Home</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <FaArrowTrendUp />
              <h3>Trending</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <BsPersonArmsUp />
              <h3>Artists</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Genre</h1>

          <div className="ml-[.1rem]">
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>Action</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>Romance</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>Thriller</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>Horor</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>Family</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <h3>All Genre</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">My Library</h1>

          <div className="ml-[.1rem]">
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <FaRegClock />
              <h3>Recently</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <MdFavoriteBorder />
              <h3>Favorite</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <IoMdDownload />
              <h3>Download</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Settings</h1>

          <div className="ml-[.1rem]">
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <MdAccountCircle />
              <h3>Account</h3>
            </div>
            <div className="flex flex-row w-[7rem] pl-1 justify-start items-center gap-1 hover:bg-cyan-300 hover:opacity-90 hover:text-black hover:rounded">
              <FiLogIn />
              <h3>Login</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-5 justify-between items-center">
          <div className="mt-[.5rem] flex flex-row items-center mr-[8rem]">
            <input
              className="w-[40rem] rounded-3xl pl-5 h-[2.5rem] text-black outline-1 outline-orange-400 opacity-75"
              type="text"
              placeholder="Search Here"
            />
            <IoIosSearch className="text-[2rem] relative right-10 text-black" />
          </div>

          <div className="flex flex-row gap-8 justify-center items-center">
            <GoMail className="text-[2rem]" />
            <IoMdNotificationsOutline className="text-[2rem]" />
            <MdAccountCircle className="text-[2rem]" />
          </div>
        </div>

        <div className="flex flex-row gap-8">
          <h1>All</h1>

          <h1>Coming Soon</h1>

          <h1>New Release</h1>
        </div>
      </div>
    </div>
  );
}
