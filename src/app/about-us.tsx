import { Limelight } from "next/font/google";
import Image from "next/image";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
});

const googleReviewsHref =
  "https://www.google.com/search?sa=X&sca_esv=183f9140eeaab3e5&sca_upv=1&tbm=lcl&q=richmond%20hair%20studio%20reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDMwNzK1NLAwNTcxsTQ2MjY1M9vAyPiKUaYoMzkjNz8vRSEjMbNIobikNCUzX6EotSwztbx4ESteaQDlB1W-WQAAAA&rldimm=16072590857449323566&hl=en-IE&ved=0CAUQ5foLahcKEwjIhsiSiJ2FAxUAAAAAHQAAAAAQBA&biw=1512&bih=858&dpr=2#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURKa3ZQWnZRRRAB";

const testimonials = new Map<string, { name: string; score: number }>([
  [
    "Fantastic haircut, color, waxing and conversation",
    { name: "Joanne Johnson", score: 5 },
  ],
  [
    "Excellent service kind and friendly staff.",
    { name: "Issy Plu", score: 5 },
  ],
  [
    "All in all a great experience and enjoyable atmosphere.",
    { name: "Magda Hechema", score: 5 },
  ],
]);

export function AboutUs(): JSX.Element {
  return (
    <div className="bg-green rounded-xl text-beige p-8 mt-12 max-w-screen mx-auto flex-1 w-full xl:mr-12">
      <div className="grid grid-cols-1 max-w-screen xl:w-full h-[60%] gap-8 mx-auto xl:gap-24 xl:mr-12 xl:grid-cols-2">
        <div className="flex col-span-1 flex-col items-start justify-start">
          <h1
            className={`${limelight.className} self-start justify-self-start text-4xl font-black mb-8 text-center xl:text-left`}
          >
            About us
          </h1>
          <div className="items-center justify-center flex-grow">
            <div>
              <p className="mb-4">
                Joanne, Shelley, and Umna together possess countless years of
                experience and a shared love for hair design as an artistic
                expression.
              </p>
              <p>
                Whether it‘s timeless hairstyles or the latest color
                innovations, we‘re committed to creating tailor-made looks that
                mirror the individual preferences of every customer.
              </p>
            </div>
          </div>

          <div className="mt-8 border-beige border-double border-2 w-full p-4 px-6">
            <h2 className={`${limelight.className} text-3xl font-bold mb-4`}>
              What Our Clients Say
            </h2>
            <ul className="space-y-6">
              {Array.from(testimonials.entries()).map(
                ([review, { name, score }]) => (
                  <li key={review} className="border-b border-neutral-200 pb-4">
                    <p className="text-xl font-medium">{`"${review}"`}</p>
                    <p className="mt-2 text-sm text-yellow">
                      - {name}, Rated {score}/5
                    </p>
                  </li>
                ),
              )}
            </ul>

            <a
              href={googleReviewsHref}
              className="block mt-8 text-center text-yellow hover:text-orange transition-colors"
            >
              Read more reviews on Google
            </a>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-center relative">
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
