import { create } from 'zustand'

const useStore = create(set => ({
    cartItems: [],
    addCartItem: () => {}
}))
export default useStore
