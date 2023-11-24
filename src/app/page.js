"use client";
import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Products from "@/Components/Products";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/rajuahammedwd/flash/main/public/fakeData.json"
        );

        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="font-montserrat px-3">
      <Banner />
      <Products data={data} />
      <Footer/>
    </main>
  );
}
