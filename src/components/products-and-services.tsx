import { Haircuts, Styling, Coloring } from "@/components/map-pricing-service";
import Image from "next/image";
import { Limelight } from "next/font/google";
import { SectionCard } from "./section-card";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export function ProductsAndServices(): JSX.Element {
  return (
    <SectionCard>
      <h1
        className={`${limelight.className} text-4xl font-black text-center md:text-left flex flex-row`}
      >
        Salon Services
      </h1>

      <div className="flex flex-col mb-8 mt-2">
        <span className="italic">
          We use and sell premium brands of hair care products so you have a
          good hair day, every day
        </span>
        <div className="relative flex flex-row">
          <Image
            alt=""
            src="/joico.png"
            className="mr-12"
            height={200}
            width={100}
          />
          <Image alt="" src="/bain-de-terre.png" height={100} width={100} />
        </div>
      </div>

      <div className="grid grid-cols-1 max-w-screen md:w-full gap-8 mx-auto md:gap-24 md:mr-12 md:grid-cols-2">
        <div className="col-span-1">
          <section className="grid grid-cols-2"></section>
          <section className="mb-12">
            <h2 className="text-2xl underline font-semibold mb-4 text">
              Haircuts
            </h2>
            <ul className="divide-y divide-gray-200">{Haircuts}</ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold underline mb-4">
              Hair Styling
            </h2>
            <ul className="divide-y divide-gray-200">{Styling}</ul>
          </section>
        </div>

        <div className="col-span-1">
          <section>
            <h2 className="text-2xl font-semibold mb-4 underline">
              Colouring Services
            </h2>
            <ul className="divide-y divide-gray-200">
              {Coloring}
              <li className="py-2 italic text-sm">
                * For pricing details, please contact the salon directly to
                schedule a consultation.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </SectionCard>
  );
}
