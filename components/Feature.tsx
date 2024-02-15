import FeatureCard from "./FeatureCard";
let features = [
  {
    title: "Sales and Revenue Tracking",
    description:
      "Sellers can manage and view daily, weekly, monthly, and yearly sales figures, including total revenue, number of orders, and average order value",
  },
  {
    title: "Inventory Management",
    description:
      "Sellers can Display current inventory levels for each product and alert users when stock is low or needs replenishment",
  },
  {
    title: "Analytics and Insights",
    description:
      "Analyze top-selling products, customer demographics, and sales trends over time.",
  },
  {
    title: "Customer Feedback and Reviews",
    description:
      "Aggregate customer reviews and ratings for products, allowing sellers to monitor feedback directly from the dashboard",
  },
];

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-center max-w-xl mx-auto">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg  font-sans  leading-none tracking-tight text-3xl md:text-5xl font-bold mb-5 text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          Powerful Features for Amazon Sellers
        </h2>
        <h3 className="text-lg mb-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
      <div className="text-center mb-10">
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-4">
        {features.map(({ title, description }) => {
          return <FeatureCard title={title} description={description} />;
        })}
      </div>
    </div>
  );
};
