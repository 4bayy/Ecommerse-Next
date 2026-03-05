"use client";

import { useState } from "react";
import SpaHeader from "../components/SpaHeader";
import TreatmentSection from "../components/TreatmentSections";
import { treatmentCategories } from "../data/treatment";
import { ChevronDown } from "lucide-react";

const categoryNav = [
  { id: "facials", label: "Facials" },
  { id: "massage", label: "Massage" },
  { id: "packages", label: "Packages" },
  { id: "beauty-services", label: "Beauty Services" },
];

const Treatments = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* <SpaHeader /> */}

      {/* Hero */}
      <section className="bg-muted py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            treatments
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Designed to nourish, nurture and improve your wellbeing in mind, body and soul.
            <br />
            Treatments at endota spa offer something for everyone, and every skin type.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar nav */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8 space-y-1">
              {categoryNav.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="block font-heading text-lg text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-4 space-y-20">
            {/* What you need to know */}
            <div className="max-w-2xl">
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className="flex w-full items-center justify-between border border-border rounded-sm px-5 py-4 font-heading text-base text-foreground hover:bg-muted transition-colors"
              >
                <span>What you need to know</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    infoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {infoOpen && (
                <div className="border border-t-0 border-border rounded-b-sm px-5 py-4 bg-card">
                  <ul className="space-y-2 text-sm font-body text-muted-foreground list-disc pl-4">
                    <li>Arrive 15 minutes early and enjoy a cup of organic tea in our relaxation lounge.</li>
                    <li>Prices may vary per treatment and location.</li>
                    <li>All treatments include a consultation to understand your needs and concerns.</li>
                    <li>Pregnant clients please let us know so we can suggest the most suitable treatment for you.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Treatment sections */}
            {treatmentCategories.map((category) => (
              <TreatmentSection key={category.id} category={category} />
            ))}

            {/* Footer note */}
            <div className="border-t border-border pt-12 max-w-3xl">
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                At endota we are committed to providing the highest standards of professional treatments in a haven where you can relax and unwind from the stresses of everyday life. Please note that all our treatments include a therapist consultation as part of the appointment time.
              </p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mt-4">
                Please arrive 15 minutes early and enjoy a cup of organic tea in our relaxation lounge before easing into your treatment. Prices vary per treatment and spa location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
