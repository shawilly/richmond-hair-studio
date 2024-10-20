import { AboutUs } from "@/components/about-us";
import { BookNow } from "@/components/book-now";
import { Divider } from "@/components/divider";
import { ProductsAndServices } from "@/components/products-and-services";
import { SideBarTriggerButton } from "@/components/sidebar-trigger-button";
import { Button } from "@/components/ui/button";
import { Limelight } from "next/font/google";
import Link from "next/link";
import Footer from "./footer";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <SideBarTriggerButton />
      {/* Hero */}
      <section
        className={`bg-[url('/alternating-arrowhead.svg')] p-8 min-w-screen min-h-screen mx-auto flex flex-col items-center justify-center`}
      >
        <h1
          className={`${limelight.className} text-5xl font-extrabold mb-4 text-center text-blue`}
        >
          Richmond Hair Studio
        </h1>
        <p className="text-lg font-semibold text-center text-blue mb-6">
          Crafting Timeless Style in Ottawa Since 1923.
        </p>
        <Link href="#book-now">
          <Button className="w-full bg-green text-white" type="submit">
            Book Now
          </Button>
        </Link>
      </section>

      <section id="about-us" className="min-h-screen">
        <AboutUs />
        <Divider
          className="flex w-full p-8 justify-center"
          height={12}
          width={800}
        />
      </section>

      <section id="products-and-services" className="min-h-screen min-w-full">
        <ProductsAndServices />
        <Divider
          className="flex w-full p-8 justify-center"
          height={12}
          width={800}
        />
      </section>

      <section id="book-now">
        <BookNow />
      </section>

      <Footer />
    </div>
  );
}
