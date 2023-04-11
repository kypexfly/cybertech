import { create } from 'zustand'

interface CartItem {
    quantity: number
    product_id: string
}

interface CartStore {
    cart: CartItem[],
    openModal: boolean,
    setOpenModal: () => void
    addCartItem: () => void
}

const useCart = create<CartStore>((set, get) => ({
    cart: [],
    openModal: false,
    setOpenModal: () => set((state) => ({...state, openModal: !state.openModal})),
    addCartItem: () => {},
}))

export default useCart
