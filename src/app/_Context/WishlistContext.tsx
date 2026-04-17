'use client'
import { WishlistResponse } from '_/Api/types.services';
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'

interface WishlistContextType {
    wishlistProductsCount: number;
    wishlistIds: string[];
    updateNumOfWishlistUi: (num: number, ids?: string[]) => void;
    toggleWishlistOptimistic: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);


export default function WishlistContextProvider({ children, wres }: { children: ReactNode, wres: WishlistResponse | undefined }) {
    console.log('wres from wishlist context', wres);

    const [wishlistProductsCount, setWishlistProductsCount] = useState(() => {
        return wres === undefined ? 0 : wres.count
    });

    const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
        return wres?.data?.map(p => p.id) || []
    });

    const [prevWres, setPrevWres] = useState(wres);

    if (wres !== prevWres) {
        setPrevWres(wres);
        if (wres !== undefined) {
            setWishlistProductsCount(wres.count)
            setWishlistIds(wres.data.map(p => p.id))
        } else {
            setWishlistProductsCount(0)
            setWishlistIds([])
        }
    }

    function updateNumOfWishlistUi(num: number, ids?: string[]) {
        setWishlistProductsCount(num)
        if (ids) {
            setWishlistIds(ids)
        }
    }

    function toggleWishlistOptimistic(id: string) {
        setWishlistIds(prev => {
            const exists = prev.includes(id);
            if (exists) {
                setWishlistProductsCount(c => Math.max(0, c - 1));
                return prev.filter(item => item !== id);
            } else {
                setWishlistProductsCount(c => c + 1);
                return [...prev, id];
            }
        });
    }

    return (
        <WishlistContext.Provider value={{ wishlistProductsCount, wishlistIds, updateNumOfWishlistUi, toggleWishlistOptimistic }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist(): WishlistContextType {
    const res = useContext(WishlistContext)
    if (res === undefined) {
        throw new Error("useWishlist must be used within a WishlistContextProvider.")
    }
    return res
}
