interface Service {
  service: string;
  price?: number;
}

const services: Service[] = [
  { service: "Wash, Cut, & Style", price: 53 },
  { service: "Wash & Blow Dry", price: 35 },
  { service: "Formal Hair Style", price: 45 },
  { service: "Updo", price: 45 },
  { service: "Men's Cut & Wash", price: 30 },
  { service: "Boy's Cut", price: 25 },
  { service: "Girl's Cut", price: 30 },
  { service: "Perm and Cut", price: 140 },
  { service: "Root Touch-Up", price: 85 },
  { service: "Cut & Colour", price: 110 },
  { service: "Cut & Colour (Long Hair)", price: 120 },
  { service: "Partial Highlights", price: 125 },
  { service: "Cut & Partial Highlights", price: 155 },
  { service: "Full Highlights", price: 165 },
  { service: "Toner", price: 10 },
  { service: "Hair Colour Refresher", price: 10 },
  { service: "Gloss Treatment", price: 10 },
  { service: "Balayage" },
  { service: "Ombre" },
  { service: "Full Head Bleach" },
  { service: "Special Effects" },
  { service: "Colour & Colour Correction" },
];

const PriceListing = (
  { service, price }: Service,
  index: number,
): JSX.Element => {
  let formatted = "*";

  if (price && !isNaN(price)) {
    formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  return (
    <li key={index} className="flex justify-between py-1">
      <span className="font-medium">{service}</span>
      <span className="text-gray-600">{formatted}</span>
    </li>
  );
};

export const Haircuts = services
  .filter((service) =>
    ["Men's Cut & Wash", "Boy's Cut", "Girl's Cut"].includes(service.service),
  )
  .map(PriceListing);

export const Styling = services
  .filter((service) =>
    [
      "Wash, Cut, & Style",
      "Wash & Blow Dry",
      "Formal Hair Style",
      "Updo",
    ].includes(service.service),
  )
  .map(PriceListing);

export const Coloring = services
  .filter((service) =>
    [
      "Root Touch-Up",
      "Cut & Colour",
      "Cut & Colour (Long Hair)",
      "Partial Highlights",
      "Cut & Partial Highlights",
      "Full Highlights",
      "Toner",
      "Hair Colour Refresher",
      "Gloss Treatment",
      "Balayage",
      "Ombre",
      "Full Head Bleach",
      "Special Effects",
      "Colour & Colour Correction",
    ].includes(service.service),
  )
  .map(PriceListing);
