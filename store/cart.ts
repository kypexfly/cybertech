import { create } from 'zustand'

export interface CartItem {
    id: string
    quantity: number
}

interface CartStore {
    cart: CartItem[],
    openModal: boolean,
    setOpenModal: () => void
    addCartItem: (item : CartItem) => void
    removeCartItem: (id : string) => void
}

const useCart = create<CartStore>((set, get) => ({
    cart: [],
    openModal: false,
    setOpenModal: () => set((state) => ({...state, openModal: !state.openModal})),
    addCartItem: (item) => set((state) => {
        const existItem = state.cart.find(cartItem => cartItem.id === item.id)
        if (existItem) {
            return {
                ...state,
                cart: state.cart.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                ),
              };
        }

        return {
            ...state,
            cart: [...state.cart, item]
        }
    }),
    removeCartItem: (id : string) => set(state => ({
        ...state,
        cart: state.cart.filter(item => item.id !== id)
    })) 
}))

export default useCart
