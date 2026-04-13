'use client'
import { Button } from '_/components/ui/button'
import { MouseEvent, ReactNode } from 'react';
import { toast } from 'sonner';
import { addProductToWishlist, removeProductFromWishlist } from '_/app/wishlist/wishlist.action';
import { useWishlist } from '_/app/_Context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

interface WishlistButtonProps {
    id: string;
    classNames?: string;
    children?: ReactNode;
}

export default function WishlistButton({ id, classNames = "" }: WishlistButtonProps) {
    const { wishlistIds, updateNumOfWishlistUi, toggleWishlistOptimistic } = useWishlist();
    const isInWishlist = wishlistIds?.includes(id);

    async function handleClick(e: MouseEvent) {
        e.preventDefault();

        // Optimistic Update
        const toastId = toast.loading(isInWishlist ? "Removing..." : "Adding...");
        toggleWishlistOptimistic(id);

        try {
            if (isInWishlist) {
                const result = await removeProductFromWishlist(id);
                if (result?.status === "success") {
                    // Sync with server data
                    updateNumOfWishlistUi(result.data.length, result.data);
                    toast.success("Product removed from wishlist", {
                        id: toastId,
                        duration: 3000,
                    });
                } else {
                    // Rollback
                    toggleWishlistOptimistic(id);
                    toast.error("Failed to remove product", { id: toastId });
                }
            } else {
                const result = await addProductToWishlist(id);
                if (result?.status === "success") {
                    // Sync with server data
                    updateNumOfWishlistUi(result.data.length, result.data);
                    toast.success(result.message || "Product added to wishlist", {
                        id: toastId,
                        duration: 3000,
                        style: { color: "green" },
                    });
                } else {
                    // Rollback
                    toggleWishlistOptimistic(id);
                    toast.error("Failed to add product", { id: toastId });
                }
            }
        } catch (error) {
            // Rollback
            toggleWishlistOptimistic(id);
            toast.error("An error occurred", { id: toastId });
        }
    }

    return (
        <Button
            className={classNames}
            onClick={handleClick}
            variant="ghost"
        >
            {isInWishlist ? (
                <FaHeart className="text-red-500 text-xl" />
            ) : (
                <FaRegHeart className="text-gray-500 text-xl" />
            )}
        </Button>
    );
}
