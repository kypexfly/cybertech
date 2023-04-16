import { Heart } from "tabler-icons-react";

export default function WishlistButton() {
  return (
    <button type="button" className="relative flex cursor-pointer items-center">
      <Heart strokeWidth={1.5} />
      <span className="absolute bottom-3 left-4 flex aspect-square h-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
        0
      </span>
    </button>
  );
}
