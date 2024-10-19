import Link from "next/link";
import { Limelight } from "next/font/google";
import Image from "next/image";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutUs(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center w-full">
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

      <Link href="/book-now" className="text-xl text-blue-700 underline">
        Book now
      </Link>
    </div>
  );
}
