import { StripeProduct } from "@/types";
import { useFilterContext } from "./useFilterContext";

export default function useFilteredProducts(products: StripeProduct[]) {
  
    const { filter } = useFilterContext();

    let sortedProducts = products;
    
    switch (filter.sortby) {
      case "price asc":
        sortedProducts.sort(
          (a, b) => a.default_price.unit_amount - b.default_price.unit_amount
        );
        break;
      case "price desc":
        sortedProducts.sort(
          (a, b) => b.default_price.unit_amount - a.default_price.unit_amount
        );
        break;
      case "name asc":
        sortedProducts.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
  
      case "name desc":
        sortedProducts.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        break;
    }

    console.log(filter.priceRange)
    const filteredProducts = sortedProducts.filter((product) => {
      const cost = product.default_price.unit_amount / 100;
      if (filter.priceRange.max === 0) {
        return true;
      }
  
      return cost >= filter.priceRange.min && cost <= filter.priceRange.max;
    });

    return {filteredProducts}
}
