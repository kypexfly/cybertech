import { create } from 'zustand'

export interface CartItem {
    productId: string
    priceId: string
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
        const existItem = state.cart.find(cartItem => cartItem.productId === item.productId)
        if (existItem) {
            return {
                ...state,
                cart: state.cart.map((i) =>
                  i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
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
        cart: state.cart.filter(item => item.productId !== id)
    })) 
}))

export default useCart
