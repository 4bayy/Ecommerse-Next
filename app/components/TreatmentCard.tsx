import { Clock } from "lucide-react";
import type { Treatment } from "../data/treatment";
import { Button } from "@mui/material";
import Link from "next/link";

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard = ({ treatment }: TreatmentCardProps) => {
  return (
    <div className="border-b border-border py-8 last:border-b-0">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-heading text-lg text-foreground">{treatment.name}</h3>
        <div className="flex items-center gap-1.5 text-muted-foreground shrink-0">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-body">{treatment.duration}</span>
        </div>
      </div>

      {treatment.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {treatment.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary px-3 py-0.5 text-xs font-body text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5 max-w-2xl">
        {treatment.description}
      </p>

      <div className="flex items-center gap-3">
        <Button variant="contained" size="small" className="font-body text-sm rounded-none border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
          learn more
        </Button>
        <Button size="small" variant="outlined" className="font-body text-sm rounded-none">
          <Link href={`/spa/${treatment.slug}`} className="block w-full h-full">
          book now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TreatmentCard;
