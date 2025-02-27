import { FAQ, Order, Product } from "./interfaces";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 249.99,
    image: "https://picsum.photos/400/400?random=1",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound.",
    bestSeller: true,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 349.99,
    image: "https://picsum.photos/400/400?random=2",
    category: "Furniture",
    description:
      "Comfortable ergonomic office chair with lumbar support and adjustable features.",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://picsum.photos/400/400?random=3",
    category: "Electronics",
    description:
      "Advanced fitness tracker with heart rate monitoring and GPS functionality.",
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://picsum.photos/400/400?random=4",
    category: "Clothing",
    description:
      "Soft, sustainable organic cotton t-shirt available in multiple colors.",
    bestSeller: true,
  },
  {
    id: 5,
    name: "Professional Blender",
    price: 129.99,
    image: "https://picsum.photos/400/400?random=5",
    category: "Kitchen",
    description:
      "High-powered blender perfect for smoothies, soups, and food preparation.",
  },
  {
    id: 6,
    name: "Leather Messenger Bag",
    price: 159.99,
    image: "https://picsum.photos/400/400?random=6",
    category: "Accessories",
    description:
      "Genuine leather messenger bag with multiple compartments and adjustable strap.",
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For orders over $1000, we also offer financing options through Affirm.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for an additional fee. International shipping times vary by location, generally taking 7-14 business days.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items in new, unused condition with original packaging. Custom or personalized items cannot be returned unless defective. Return shipping is free for defective items, otherwise a small fee applies.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary based on location. Import duties and taxes may apply and are the responsibility of the customer.",
  },
  {
    id: 5,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website or contacting our customer service team.",
  },
];

export const dummyOrders: Order[] = Array.from({ length: 100 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customerName: `Customer ${i + 1}`,
  customerEmail: `customer${i + 1}@example.com`,
  customerPhone: `+1 (555) ${100 + i}-${1000 + i}`,
  customerAddress: `${1000 + i} Main St, City ${i + 1}, State ${i + 1}, 10000`,
  productName: `Product ${i + 1}`,
  date: new Date(2023, 0, 1 + i),
  status: "Pending",
  total: Math.floor(Math.random() * 1000) + 10,
  cart: [
    {
      product: {
        id: 5,
        name: "Professional Blender",
        price: 129.99,
        image: "https://picsum.photos/400/400?random=5",
        category: "Kitchen",
        description:
          "High-powered blender perfect for smoothies, soups, and food preparation.",
      },
      quantity: Math.floor(Math.random() * 5) + 1,
    },
    {
      product: {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 249.99,
        image: "https://picsum.photos/400/400?random=1",
        category: "Electronics",
        description:
          "High-quality wireless headphones with noise cancellation and premium sound.",
      },
      quantity: Math.floor(Math.random() * 5) + 1,
    },
  ],
}));
