import { Product } from '@/types'
import { create } from 'zustand'

interface CartItem {
    quantity: number
    price_id: string
    name: string
    cost: number
}

interface CartStore {
    cart: Product[],
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
