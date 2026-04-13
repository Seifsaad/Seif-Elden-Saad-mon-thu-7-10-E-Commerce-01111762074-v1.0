"use client";

import { Button } from "_/components/ui/button";
import { ButtonGroup } from "_/components/ui/button-group";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { CartResponse, Product } from './../../../Api/types.services';

interface QuantityButtonProps {
  data?: {
    count?: number;
    quantity?: number;
  };
}

export default function QuantityButton({ data }: QuantityButtonProps) {
  console.log(data);
  
  const [quantity, setQuantity] = useState(0);
  const [count, setCount] = useState(data?.count ?? 0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1));

  const countIncrement = () => setCount((prev) => prev + 1);
  const countDecrement = () => setCount((prev) => Math.max(0, prev - 1)); 

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val === 0) {
      setQuantity(0);
      return;
    }
      if (val >= 0) {
    setQuantity(val);
  }

};
const handleCountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const val = Number(e.target.value);
  if (val === 0) {
    setCount(0);
    return;
  }
    if (val >= 0) {
  setCount(val);
}
};
  

  return (
    <ButtonGroup
      orientation="horizontal"
      aria-label="Quantity controls"
      className="h-fit"
    >
      {data?.count ? <Button disabled={ count === 0} variant="outline" size="icon" onClick={countDecrement}>
        <MinusIcon />
      </Button>:<Button disabled={quantity === 0} variant="outline" size="icon" onClick={decrement}>
        <MinusIcon />
      </Button>}
      {data?.count ? <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={count}
        onChange={handleCountInput}
        className="w-12 text-center border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label="Quantity"
      />:<input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={quantity}
        onChange={handleInput}
        className="w-12 text-center border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label="Quantity"
      />}
      {data?.count ? <Button variant="outline" size="icon" onClick={countIncrement} disabled={count >= (data?.quantity ?? 0)}>
        <PlusIcon />
      </Button>:<Button variant="outline" size="icon" onClick={increment} disabled={quantity >= (data?.quantity ?? 0)}>
        <PlusIcon />
      </Button>}
    </ButtonGroup>
  );
}