"use client";

import { useState, useMemo } from "react";
// import { useEffect } from "react";
// import { fetchProducts } from "../api/products";
// import { useQuery } from "@tanstack/react-query";

import ProductCard from "@/app/components/ProductCard";

const ProductListingPage = () => {

  // ✅ Static products (temporary)
  const staticProducts = [
    { id: 1, title: "Product 1", price: 120, image: "/p1.png" },
    { id: 2, title: "Product 2", price: 80, image: "/p2.png" },
    { id: 3, title: "Product 3", price: 200, image: "/p3.png" },
    { id: 4, title: "Product 4", price: 150, image: "/p4.png" },
    { id: 5, title: "Product 5", price: 60, image: "/p5.png" },
    { id: 6, title: "Product 6", price: 300, image: "/p6.png" },
    { id: 7, title: "Product 7", price: 90, image: "/p7.png" },
    { id: 8, title: "Product 8", price: 40, image: "/p8.png" },
    { id: 9, title: "Product 9", price: 500, image: "/p9.png" },
    { id: 10, title: "Product 10", price: 250, image: "/p10.png" },
  ];

  const [products] = useState<any[]>(staticProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">("default");

  const itemsPerPage = 8;

  /* -----------------------------
     ❌ React Query removed
  ------------------------------ */

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  /* -----------------------------
     ❌ API data removed
  ------------------------------ */

  // useEffect(() => {
  //   if (data?.products) {
  //     setProducts(data.products);
  //   }
  // }, [data]);

  /* -----------------------------
     ✅ Sorting
  ------------------------------ */

  const sortedProducts = useMemo(() => {
    if (sortOrder === "default") return products;

    return [...products].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [products, sortOrder]);

  /* -----------------------------
     ✅ Pagination
  ------------------------------ */

  const currentIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = sortedProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handleSort = (order: "asc" | "desc" | "default") => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  /* -----------------------------
     ❌ Loading removed
  ------------------------------ */

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading products</div>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <button className="rounded-full border px-4 py-2 text-sm">
          Filter
        </button>

        <select
          className="rounded-full border px-4 py-2 text-sm"
          onChange={(e) =>
            handleSort(e.target.value as "asc" | "desc" | "default")
          }
        >
          <option value="default">Featured</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex items-center justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Previous
        </button>

        <span>{currentPage}</span>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </section>
  );
};

export default ProductListingPage;