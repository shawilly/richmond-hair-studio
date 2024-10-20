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
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        <div className="flex flex-col text-lg">
          <h1
            className={`${limelight.className} underline text-4xl font-black md:mb-8 text-center xl:text-left`}
          >
            Book Now:
          </h1>
        </div>

        <Link className="text-xl" href="tel:+6137224532">
          <Button
            className="w-full bg-green text-white mb-8 md:mb-2"
            type="submit"
          >
            Phone: <span className="underline">(613)-722-4532</span>
          </Button>
        </Link>
      </div>

      <div className="min-w-[350px] md:min-w-[500px] rounded-lg overflow-hidden shadow-md shadow-neutral-300">
        <GoogleMapsEmbed
          apiKey={apiKey}
          mode="place"
          q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
          height={400}
          width="100%"
        />
      </div>
    </SectionCard>
  );
}
