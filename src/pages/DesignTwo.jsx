import { Link } from "react-router-dom";
import ChartComponent from "../components/ChartComponent";
const DesignTwo = () => {
  return (
    <>
      <Sidebar />
      <main className="border ml-64 font-opensans p-5 bg-slate-200">
        <section className="min-h-screen">
          {/* Search */}
          <div className="flex justify-between items-center mb-5">
            <div>
              <h3 className="text-lg font-bold">Dashboard</h3>
            </div>
            <div>
              <button className="p-2 bg-green-800 rounded-md text-white">
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
          {/* Search */}
          <Header />
          <div className="grid grid-cols-4 gap-5 mb-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="w-80 h-80 bg-white p-2 shadow-md rounded-md">
            <ChartComponent />
          </div>
        </section>
      </main>
    </>
  );
};

export default DesignTwo;

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 bg-white text-white font-opensans p-5">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 overflow-hidden mb-5">
        <img src="logo.png" alt="" />
      </div>
      {/* End Logo */}
      {/* Sidebar Menu */}
      <div className="">
        {/* Sidebar Item Active */}
        <div className="mb-2 bg-green-800 text-white p-2 rounded-md cursor-pointer hover:bg-green-800">
          <p>Menu Item Active</p>
        </div>
        {/* End Sidebar Item Active */}
        {/* Sidebar Item */}
        <div className="mb-2 border-l-2 border-white text-black p-2 cursor-pointer hover:border-green-500">
          <p>Menu Item</p>
        </div>
        {/* End Sidebar Item */}

        {/* Sidebar Item */}
        <div className="mb-2 border-l-2 border-white text-black p-2 cursor-pointer hover:border-green-500">
          <p>Menu Item</p>
        </div>
        {/* End Sidebar Item */}
        {/* Sidebar Item */}
        <Link to={"/"}>
          <div className="mb-2 border-l-2 border-white text-black p-2 cursor-pointer hover:border-green-500">
            <p>Design 1</p>
          </div>
        </Link>
        {/* End Sidebar Item */}
        {/* Sidebar Item */}
        <Link to={"/design-two"}>
          <div className="mb-2 border-l-2 border-white text-black p-2 cursor-pointer hover:border-green-500">
            <p>Design 2</p>
          </div>
        </Link>
        {/* End Sidebar Item */}
      </div>
      {/* End Sidebar Menu */}
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

const Card = () => {
  return <div className="h-20 bg-white rounded-md shadow-md p-5">asd</div>;
};
