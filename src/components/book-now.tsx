import { config } from "@/lib/env";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Limelight } from "next/font/google";
import Link from "next/link";
import { SectionCard } from "./section-card";
import { Button } from "./ui/button";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export function BookNow(): JSX.Element {
  const apiKey = config.googleMapsApiKey();

  return (
    <SectionCard>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-24 max-w-screen-xl mx-auto">
        <div className="flex flex-col text-lg">
          <h1
            className={`${limelight.className} text-4xl font-black mb-8 text-center xl:text-left`}
          >
            Appointment
          </h1>
          <Link className="text-xl" href="tel:+6137224532">
            <Button className="w-full bg-green text-white" type="submit">
              Phone: <span className="underline">(613)-722-4532</span>
            </Button>
          </Link>
        </div>

        <div>
          <div className="rounded-lg overflow-hidden shadow-md shadow-neutral-300">
            <GoogleMapsEmbed
              apiKey={apiKey}
              mode="place"
              q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
