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
    <div className="p-8 max-w-screen mx-auto flex-1 w-full xl:mr-12 border-brown border-4 rounded-xl border-double">
      <h1
        className={`${limelight.className} text-4xl font-black mb-8 text-center xl:text-left`}
      >
        Appointment
      </h1>

      <div className="grid grid-cols-1 max-w-screen xl:w-full h-[60%] gap-8 mx-auto xl:gap-24 xl:mr-12 xl:grid-cols-2">
        <div className="col-span-1 text-lg flex-row mr-2 items-start justify-start">
          <Link className="mb-12" href={`tel:+6137224532`}>
            Call for an appointment at{" "}
            <span className="underline">(613)-722-4532</span>{" "}
          </Link>
        </div>

        <div className="col-span-1 min-h-[650px] overflow-hidden flex items-center justify-center rounded-lg shadow-md shadow-neutral-300">
          <GoogleMapsEmbed
            apiKey={apiKey}
            mode="place"
            q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
            height={650}
            width="100%;"
          />
        </div>
      </div>
    </div>
  );
}
