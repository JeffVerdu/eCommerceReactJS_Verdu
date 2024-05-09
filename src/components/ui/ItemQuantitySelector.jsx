import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

export const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleQuantity = () => {
    onQuantityChange(parseInt(quantity));
  };

  useEffect(() => {
    if (quantity > 1) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    handleQuantity();
  }, [quantity]);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          setQuantity(quantity - 1);
        }}
        className={`px-2 py-2 bg-white rounded-full hover:scale-90 transform duration-300 ease-in-out`}
        disabled={disabledButton}
      >
        <Minus size={15} color="#2e0249" strokeWidth={4} />
      </button>
      <p className="text-lg font-medium">{quantity}</p>
      <button
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="px-2 py-2 bg-white rounded-full hover:scale-110 transform duration-300 ease-in-out"
      >
        <Plus size={15} color="#2e0249" strokeWidth={4} />
      </button>
    </div>
  );
};
