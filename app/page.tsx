import Navbar from "./navbar";
import SearchBar from "./search-bar";
import Select from "./select";
import Countries from "./countries";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <div className="flex justify-between p-2 md:p-4">
        <SearchBar />
        <Select />
      </div>
      <div className="flex flex-wrap justify-between gap-4 p-2 md:p-4">
        {/** @ts-expect-error Server component */}
        <Countries />
      </div>
    </main>
  );
}
