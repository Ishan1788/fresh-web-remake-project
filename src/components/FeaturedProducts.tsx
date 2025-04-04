
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Zion 4",
    price: 140,
    image: "/shoe1.jpg",
  },
  {
    id: 2,
    name: "Tatum 3",
    price: 125,
    image: "/shoe2.jpg",
  },
  {
    id: 3,
    name: "Luka 4",
    price: 130,
    image: "/shoe3.jpg",
  },
  {
    id: 4,
    name: "Luka 3",
    price: 130,
    image: "/shoe4.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
