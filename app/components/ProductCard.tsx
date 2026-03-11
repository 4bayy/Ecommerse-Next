type Product = {
   id: number;
    title: string;
    description: string;
    price: number;
    images: string;
    stock: number;  
    tags :[string];
    thumbnail: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group rounded-2xl bg-white border border-gray-200 overflow-hidden transition hover:shadow-xl">
      
      {/* Image */}
      <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-lg font-semibold text-gray-900 mb-4">
          ₹{product.price.toLocaleString()}
        </p>

        <button className="w-full rounded-full border border-gray-900 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
