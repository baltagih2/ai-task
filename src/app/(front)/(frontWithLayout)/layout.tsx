import { CartDrawer } from "@/components/cart-drawer";
import Link from "next/link";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">
                  My Store
                </span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground"
                  href="/products"
                >
                  Products
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/about"
                >
                  About
                </a>
                <a
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/contact"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <CartDrawer />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Store
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our curated collection of high-quality products designed
              for your lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={"/products"}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium"
              >
                Shop Now
              </Link>
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Store</h3>
                <p className="text-slate-400">
                  Providing quality products since 2023. We&apos;re dedicated to
                  customer satisfaction and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <address className="text-slate-400 not-italic">
                  123 Store Street
                  <br />
                  City, State 12345
                  <br />
                  Email: info@store.com
                  <br />
                  Phone: (123) 456-7890
                </address>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>
                &copy; {new Date().getFullYear()} Our Store. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
