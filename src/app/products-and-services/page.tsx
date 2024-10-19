import { Haircuts, Styling, Coloring } from "@/components/map-pricing-service";
import { Limelight } from "next/font/google";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function ProductsAndServices(): JSX.Element {
  return (
    <div className="p-8 max-w-screen mx-auto flex-1 w-full md:mr-12">
      <h1
        className={`${limelight.className} text-4xl font-black mb-8 text-center md:text-left`}
      >
        Salon Services
      </h1>

      <div className="grid grid-cols-1 max-w-screen md:w-full gap-8 mx-auto md:gap-24 md:mr-12 md:grid-cols-2">
        <div className="col-span-1">
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
    </div>
  );
}
