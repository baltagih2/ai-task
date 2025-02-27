"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/interfaces";
import Link from "next/link";
import { useCart } from "@/cart-context";

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const { addToCart } = useCart();
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                <Link href={`/products/${product.id}`}>
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 truncate">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => addToCart(product)}
                          className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
