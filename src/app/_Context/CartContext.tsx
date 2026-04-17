'use client'
import { CartResponse } from '_/Api/types.services';
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'

interface CartContextType {
    cartProductsCount: number;
    updateNumOfCartUi: (num: number) => void;
    incrementCartCount: () => void;
    decrementCartCount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export default function CartContextProvider({ children, res }: { children: ReactNode, res: CartResponse | undefined }) {

    const [cartProductsCount, setCartProductsCount] = useState(() => {
        return res === undefined ? 0 : res.products.length
    });

    const [prevRes, setPrevRes] = useState(res);

    if (res !== prevRes) {
        setPrevRes(res);
        if (res !== undefined) {
            setCartProductsCount(res.products.length)
        } else {
            setCartProductsCount(0)
        }
    }

    function updateNumOfCartUi(num: number) {
        setCartProductsCount(num)
    }

    function incrementCartCount() {
        setCartProductsCount(c => c + 1)
    }

    function decrementCartCount() {
        setCartProductsCount(c => Math.max(0, c - 1))
    }

    return (
        <CartContext.Provider value={{ cartProductsCount, updateNumOfCartUi, incrementCartCount, decrementCartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const res = useContext(CartContext)
    if (res === undefined) {
        throw new Error("useCart must be used within a CartContextProvider.")
    }
    return res
}
