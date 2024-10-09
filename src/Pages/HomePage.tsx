import Concept from "../Components/Concept";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";

function HomePage() {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-thin pb-7 tracking-widest">
            WE CARRY ONLY THE FINEST
          </h1>
          <p className="text-2xl font-thin tracking-wide">ITEMS AVAILABLE</p>
        </div>
      </header>
      <main className="">
        <Products />
        <Concept />
      </main>
    </>
  );
}

export default HomePage;
