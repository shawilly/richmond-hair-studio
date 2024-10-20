import { AboutUs } from "@/components/about-us";
import { BookNow } from "@/components/book-now";
import { Divider } from "@/components/divider";
import { ProductsAndServices } from "@/components/products-and-services";
import { Limelight } from "next/font/google";
import Image from "next/image";
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
        <Divider
          className="flex w-full p-8 justify-center"
          height={12}
          width={800}
        />
      </section>

      <section id="products-and-services" className="min-h-screen">
        <ProductsAndServices />
        <Divider
          className="flex w-full p-8 justify-center"
          height={12}
          width={800}
        />
      </section>

      <section id="book-now" className="min-h-screen">
        <BookNow />
        <Footer />
      </section>
    </div>
  );
}
