import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 500,
      duration: "1 Month",
      features: ["Access to gym equipment", "Locker facility"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 1300,
      duration: "3 Months",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "1 Personal Training Session",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 2400,
      duration: "6 Months",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Monthly Personal Training",
        "Diet Plan Guidance",
      ],
    },
    {
      id: 4,
      name: "Yearly Plan",
      price: 4500,
      duration: "12 Months",
      features: [
        "All Premium Features",
        "Free Gym Merchandise",
        "Priority Support",
      ],
    },
    {
      id: 5,
      name: "Student Plan",
      price: 400,
      duration: "1 Month",
      features: [
        "Access to gym equipment",
        "Discounted Rate",
        "Valid Student ID Required",
      ],
    },
  ];

  return (
    <div className="">
      <h2 className="text-5xl">Best Prices in the town </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gymPlans.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
