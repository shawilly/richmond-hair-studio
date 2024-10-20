import { config } from "@/lib/env";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Limelight } from "next/font/google";
import Link from "next/link";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export function BookNow(): JSX.Element {
  const apiKey = config.googleMapsApiKey();

  return (
    <div className="p-8 w-full mx-auto flex flex-col xl:mr-12 border-brown border-4 rounded-xl border-double mt-12">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-24 max-w-screen-xl mx-auto">
        <div className="flex flex-col text-lg">
          <h1
            className={`${limelight.className} text-4xl font-black mb-8 text-center xl:text-left`}
          >
            Appointment
          </h1>
          <Link className="text-xl" href="tel:+6137224532">
            Call for an appointment at{" "}
            <span className="underline">(613)-722-4532</span>
          </Link>
        </div>

        <div className="min-h-[650px] flex items-center justify-center overflow-hidden rounded-lg shadow-md shadow-neutral-300">
          <GoogleMapsEmbed
            apiKey={apiKey}
            mode="place"
            q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
            height={650}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
