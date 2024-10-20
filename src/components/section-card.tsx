import clsx from "clsx";

export function SectionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={clsx(
        className,
        "p-8 bg-offwhite shadow-md shadow-neutral-200 w-full mx-auto flex flex-col xl:mr-12 border-brown border-4 rounded-xl border-double mt-12",
      )}
    >
      {children}
    </div>
  );
}
