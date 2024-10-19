import { Limelight } from "next/font/google";
import Image from "next/image";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutUs(): JSX.Element {
  return (
    <div className="p-8 max-w-screen mx-auto flex-1 w-full xl:mr-12">
      <h1
        className={`${limelight.className} text-4xl font-black mb-8 text-center xl:text-left`}
      >
        About us
      </h1>

      <div className="grid grid-cols-1 max-w-screen xl:w-full h-[60%] gap-8 mx-auto xl:gap-24 xl:mr-12 xl:grid-cols-2">
        <div className="flex col-span-1 text-center flex-col items-center justify-center">
          <span className="mb-8">
            Joanne, Shelley, and Umna together possess countless years of
            experience and a shared love for hair design as an artistic
            expression.
          </span>
          <span>
            Whether it‘s timeless hairstyles or the latest color innovations,
            we‘re committed to creating tailor-made looks that mirror the
            individual preferences of every customer.
          </span>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <Image
            alt=""
            src="/hair-dryer.jpg"
            className="rounded-lg shadow-md shadow-neutral-300"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
