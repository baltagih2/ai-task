import FaqSection from "@/components/faq-section";
import ProductCarousel from "@/components/product-carousel";
import { faqs, products } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqSection faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
