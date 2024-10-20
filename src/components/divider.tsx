"use client";
import Image from "next/image";

export function Divider({
  height,
  width,
  className,
}: {
  height: number;
  width: number;
  className?: string;
}): JSX.Element {
  return (
    <Image
      alt=""
      className={className}
      height={height}
      src="/divider.svg"
      width={width}
    />
  );
}
