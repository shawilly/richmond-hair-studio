import { Limelight } from "next/font/google";
import Image from "next/image";
import { AboutUs } from "./about-us";
import { ProductsAndServices } from "./products-and-services";
import { BookNow } from "./book-now";
import Footer from "./footer";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Hero */}
      <section className="p-8 max-w-screen min-h-screen mx-auto flex-1 w-full">
        <h1
          className={`${limelight.className} text-4xl font-black mb-8 text-center`}
        >
          Richmond Hair Studio
        </h1>

        <Image
          alt=""
          src="/curling-iron.jpg"
          className="rounded-lg mb-8 shadow-md shadow-neutral-300 hidden md:flex"
          height={200}
          width={400}
        />
      </section>

      <section id="about-us" className="min-h-screen">
        <AboutUs />
      </section>

      <section id="products-and-services" className="pt-12 min-h-screen">
        <ProductsAndServices />
      </section>

      <section id="book-now" className="mt-12">
        <BookNow />
      </section>
      <Footer />
    </div>
  );
}
