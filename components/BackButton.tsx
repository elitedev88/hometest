import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="text-blue-700 font-bold w-8 h-8 border-2 border-blue-700 flex items-center justify-center rounded-full"
    >
      &#8592;
    </button>
  );
};

export default BackButton;
