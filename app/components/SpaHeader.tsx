import { Button } from "@mui/material";
import { Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";

const navItems = ["shop", "treatments", "spas", "gifting + gift cards", "blogs", "retreat"];

const SpaHeader = () => {
  return (
    <header className="border-b border-border bg-card">
      {/* Top banner */}
      <div className="bg-primary py-2 text-center">
        <p className="text-sm font-body text-primary-foreground">
          Free shipping on orders over $75*
        </p>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="font-heading text-3xl tracking-tight text-primary">
          endota
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`text-sm font-body text-foreground hover:text-primary transition-colors ${
                item === "treatments" ? "border-b-2 border-primary pb-0.5" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-foreground hover:text-primary transition-colors" aria-label="Account">
            <User className="h-5 w-5" />
          </button>
          <Button variant="contained" size="small" className="hidden md:inline-flex font-body text-sm">
            book a treatment
          </Button>
          <button className="text-foreground hover:text-primary transition-colors" aria-label="Bag">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SpaHeader;
