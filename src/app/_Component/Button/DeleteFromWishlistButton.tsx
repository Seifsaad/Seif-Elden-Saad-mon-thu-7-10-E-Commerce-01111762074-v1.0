'use client'
import { Button } from '_/components/ui/button'
import { MouseEvent, ReactNode } from 'react';
import { removeProductFromWishlist } from '_/app/wishlist/wishlist.action';
import { toast } from 'sonner';
import { useWishlist } from '_/app/_Context/WishlistContext';

interface DeleteFromWishlistProps {
  id: string;
  classNames?: string;
  children: ReactNode;
}

export default function DeleteFromWishlistButton({ id, classNames = "", children }: DeleteFromWishlistProps) {
    const { updateNumOfWishlistUi } = useWishlist();

    async function handleClick(e: MouseEvent) {
        e.preventDefault();
        const res = await removeProductFromWishlist(id);
        
        if (res?.status === "success") {
            updateNumOfWishlistUi(res.data.length, res.data);
            toast.success("Product removed from wishlist", {
                duration: 3000,
                position: "top-right",
                style: { color: "green" },
            });
        } else {
            toast.error("Failed to remove product from wishlist", {
                duration: 3000,
                position: "top-right",
                style: { color: "red" },
            });
        }
    }

    return (
        <Button className={classNames} onClick={handleClick} variant="outline">
            {children}
        </Button>
    )
}
