"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/constants";
import { useCart } from "@/cart-context";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id));
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h2 className="font-semibold mb-2">Product Details</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Category</h2>
              <p className="text-muted-foreground">{product.category}</p>
            </div>
            <Button
              className="w-full sm:w-auto"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
