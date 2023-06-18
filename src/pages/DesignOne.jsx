import { Link } from "react-router-dom";

export default function DesignOne() {
  return (
    <>
      {/* Background */}
      <div
        className="absolute h-screen w-full -z-10 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(https://media.kompas.tv/library/image/content_article/article_img/20211003054809.jpg)`,
        }}
      ></div>
      {/* End Background */}
      <section className="h-screen bg-green-300 bg-opacity-60 backdrop-blur-sm  p-2 flex gap-5 overflow-hidden relative text-gray-500">
        <SideLeft />
        <Main />
        <SideRight />
      </section>
    </>
  );
}

const SideLeft = () => {
  return (
    <div className="w-[15%] bg-white rounded-md shadow-2xl p-2">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 overflow-hidden mb-5">
        <img src="logo.png" alt="" />
      </div>
      {/* End Logo */}
      {/* Side Menu */}
      <div className="font-semibold">
        <div className="h-10 border-l-2 border-green-500 text-green-500 flex items-center px-2 cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <p>Dashboard</p>
        </div>

        {/* Menu item */}
        <div className="text-gray-500 h-10 border-l-2 border-white flex items-center gap-2 px-2 hover:border-green-500 hover:text-green-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <p>Learn</p>
        </div>
        {/* End Menu item */}

        {/* Menu item */}
        <div className="text-gray-500 h-10 border-l-2 border-white flex items-center gap-2 px-2 hover:border-green-500 hover:text-green-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>

          <p>Setting</p>
        </div>
        {/* End Menu item */}

        {/* Menu item */}
        <Link to={"/"}>
          <div className="text-gray-500 h-10 border-l-2 border-white flex items-center gap-2 px-2 hover:border-green-500 hover:text-green-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <p>Design 1</p>
          </div>
        </Link>
        {/* End Menu item */}
        {/* Menu item */}
        <Link to={"/design-two"}>
          <div className="text-gray-500 h-10 border-l-2 border-white flex items-center gap-2 px-2 hover:border-green-500 hover:text-green-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <p>Design 2</p>
          </div>
        </Link>
        {/* End Menu item */}
      </div>
      {/* End Side Menu */}
    </div>
  );
};

const SideRight = () => {
  return (
    <div className="w-[25%] rounded-md ">
      <div className="flex items-center justify-end gap-5 h-10  mb-5">
        <div className="text-white relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex justify-center items-center">
            1
          </span>
        </div>
        <div className="flex gap-1 items-center text-white">
          <p className=" font-bold">Jhon Doe</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          alt=""
          className="h-10"
        />
      </div>
      <div className="bg-white h-56 shadow-2xl mb-5 rounded-md p-5">
        <img
          src="https://bincangsyariah.com/wp-content/uploads/2018/06/Baca-Alquran.jpg"
          alt=""
          className="h-full object-fill rounded-lg"
        />
      </div>
      <div className="bg-white h-56 shadow-2xl mb-5 rounded-md p-5">asd</div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="w-[60%]">
      <div className="mb-5">
        <div className="w-56 h-10 relative">
          <input
            type="text"
            className="bg-white w-full rounded-md p-2"
            placeholder="search"
          />
          <button className="p-2 bg-green-500 absolute rounded-md right-0 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-2xl p-5">
        {/* Image */}
        <div className="h-64 bg-green-500 overflow-hidden rounded-md flex justify-between items-center px-5 mb-5">
          <div className="w-[300px] flex justify-center">
            <p className="text-white text-2xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              ab?
            </p>
          </div>
          <div>
            <img src="learn-img.png" alt="" className="h-56 " />
          </div>
        </div>
        {/* End Image */}

        <div className="flex justify-between mb-5">
          <div>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              aliquam?
            </p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
          </div>
          <button className="bg-green-500 px-5 py-1 rounded-md text-white">
            Learn
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {/* Card */}
          <div className="border h-32 bg-green-500 text-white p-5 rounded-md">
            <p className="text-2xl font-bold">Tes Tahfidz </p>
            <p>Tes Tahfidz </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="border h-32 bg-green-500 text-white p-5 rounded-md">
            <p className="text-2xl font-bold">Tes Tahfidz </p>
            <p>Tes Tahfidz </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="border h-32 bg-green-500 text-white p-5 rounded-md">
            <p className="text-2xl font-bold">Tes Tahfidz </p>
            <p>Tes Tahfidz </p>
          </div>
          {/* End Card */}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div
      className="h-56 bg-cover bg-center rounded-md mb-5"
      style={{
        backgroundImage: `url(https://ldiijatim.com/wp-content/uploads/2016/06/membaca-alquran-di-bulan-ramadhan.jpg)`,
      }}
    >
      <div className="h-56 bg-gradient-to-tr from-green-500 to-transparent rounded-md p-5 bg-cover flex items-center">
        <p className="text-3xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          exercitationem?
        </p>
      </div>
    </div>
  );
};
