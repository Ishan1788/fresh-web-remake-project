
import { Button } from "@/components/ui/button";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="bg-gray-200 rounded-lg mb-4 h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-40"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff";
          }}
        />
      </div>
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="font-bold text-gray-900 mb-4">${product.price}</p>
      <Button variant="link" className="p-0 h-auto text-gray-700 hover:text-black">
        See More →
      </Button>
    </div>
  );
};

export default ProductCard;
