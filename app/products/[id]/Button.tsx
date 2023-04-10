'use client'

export default function Button() {
  return (
    <button onClick={() => alert('Added product')} className="rounded bg-green-600 p-3 font-bold text-white">
      Add to cart
    </button>
  );
}
