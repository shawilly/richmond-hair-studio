import localFont from "next/font/local";
import Link from "next/link";

export const PicNic = localFont({ src: "../fonts/PicNic-Regular.woff2" });

const Footer = (): JSX.Element => {
  return (
    <footer className="footer z-10 flex items-center justify-center border-t border-x-transparent bg-white text-slate-600">
      <div className="container flex items-center justify-center p-12">
        <div className="flex items-center pr-10">
          <Link
            href="https://shawilly.dev"
            className="flex transform items-center transition-transform hover:scale-110 hover:text-green-600"
            target="_blank"
          >
            <p className="mr-1">
              crafted by{" "}
              <span className={`${PicNic.className} mr-1 text-2xl`}>
                shawilly
              </span>
            </p>
          </Link>
        </div>
        <span>Copyright © All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
