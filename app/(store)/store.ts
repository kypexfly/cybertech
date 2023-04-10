import { create } from 'zustand'
import {type Product} from '../../components/ProductCard'

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
