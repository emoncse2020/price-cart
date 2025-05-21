import { FaCheck } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="text-left">
      <p className="flex items-center gap-2">
        <span>
          <FaCheck />
        </span>
        {feature}
      </p>
    </div>
  );
};

export default Feature;
