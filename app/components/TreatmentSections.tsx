import type { TreatmentCategory } from "../data/treatment";
import TreatmentCard from "./TreatmentCard";

interface TreatmentSectionProps {
  category: TreatmentCategory;
}

const TreatmentSection = ({ category }: TreatmentSectionProps) => {

  console.log("Executed in SERVER COMPONENT");

  
  return (
    <section id={category.id} className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Treatment list */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            {category.title}
          </h2>

          {category.description && (
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {category.description}
            </p>
          )}

          <div>
            {category.treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </div>

        {/* Category image */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="sticky top-32">
            <img
              src={typeof category.image === "string" ? category.image : category.image.src}
              alt={category.title}
              className="w-full rounded-sm object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
