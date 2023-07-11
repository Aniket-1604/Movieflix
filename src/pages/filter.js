import Head from "next/head";
import { useState } from "react";
import Sort from "../containers/sort";
import Card from "@/components/card";
import Nav from "@/components/nav";

export default function Filter() {
  const [filterResults, setFilterResults] = useState([]);

  return (
    <>
      <Head>
        <title>Movie Filter</title>
      </Head>
      {/* Filter Bar */}
      <Sort setFilterResults={setFilterResults} />
      {/* Filter Result Cards */}
      <div className="mx-auto max-w-2xl px-6 py-24 -mt-12 md:mt-0 md:px-4 md:py-16 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Card cardData={filterResults} />
        </div>
      </div>
      {/* Navbar */}
      <Nav activePage={"Filter"} />
    </>
  );
}
