import facialHero from "../assets/facial-hero.jpg";
import massageHero from "../assets/massage-hero.jpg";
import packagesHero from "../assets/packages-hero.jpg";
import beautyHero from "../assets/beauty-hero.jpg";
import { StaticImageData } from "next/image";


export type Treatment = {
  name: string;
  duration: string;
  tags: string[];
  description: string;
  slug: string;
};

export type TreatmentCategory = {
  id: string;
  title: string;
  image: StaticImageData | string;
  description: string;
  treatments: Treatment[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "facials",
    title: "facial",
    image: facialHero,
    description:
      "Facial treatments at endota spa offer something for everyone, and every skin type. Whether we are infusing active botanicals and antioxidants into your skin with our signature endota spa Organics™ facials or using advanced, high-performance anti-ageing techniques with our Light Therapy, hydro-microdermabrasion or glycolic peel treatments, a facial experience at endota spa addresses your needs and combines relaxation with results.",
    treatments: [
      { name: "Organic Infusion Facial", duration: "50 minutes", tags: ["Hydrate", "Nourish", "Nurture"], description: "A facial that's equal parts results and relaxation, using some of nature's best ingredients to hydrate, plump, brighten and calm your complexion.", slug: "organic-infusion" },
      { name: "Organic Express", duration: "30 minutes", tags: ["Hydrate", "Nourish", "Calm"], description: "An express version of our most-loved facial for those short on time or who are after an immediate burst of hydration.", slug: "organic-express" },
      { name: "Customised Facial", duration: "60 minutes", tags: ["Analyse", "Target", "Treat"], description: "Designed to treat your specific concerns, this one-hour results-based facial uses advanced skin diagnosis to help transform your complexion.", slug: "new-age-customised-facial" },
      { name: "Express Customised Facial", duration: "30 minutes", tags: ["Analyse", "Target", "Treat"], description: "An express version of our Customised Facial, addressing your skin's specific needs with a curated combination of endota's high-performance formulations.", slug: "express-customised-facial" },
      { name: "Sculpt & Glow Facial", duration: "60 minutes", tags: ["Contour", "Lift", "Illuminate"], description: "Redefine and illuminate with this contouring and lifting facial that combines manual massage, facial cupping and gua sha to visibly sculpt and reduce puffiness.", slug: "sculpt-and-glow" },
      { name: "Intense New Age", duration: "75 minutes", tags: ["Plump", "Smooth", "Stimulate"], description: "Addresses unwanted hyperpigmentation and moisture loss with four of our most plumping and brightening treatments combined in one.", slug: "intense-new-age" },
      { name: "Clinical Peel", duration: "60 minutes", tags: ["Resurface", "Hydrate", "Brighten"], description: "This clinical strength, fast-acting chemical peel is tailored to your individual skin concerns and designed to get results.", slug: "new-age-clinical-peel-60" },
      { name: "Express Clinical Peel", duration: "30 minutes", tags: ["Resurface", "Hydrate", "Brighten"], description: "An express version of our Clinical Peel designed to promote a smooth, radiant and brightened complexion in just 30 minutes.", slug: "express-clinical-peel" },
      { name: "New Age Light Therapy", duration: "60 minutes", tags: ["Plump", "Boost", "Defend"], description: "Refines your skin's tone and reduces the effects of sun damage by boosting collagen and elastin production.", slug: "new-age-light-therapy" },
      { name: "Intense Radiance", duration: "45 minutes", tags: ["Hydrate", "Renew", "Illuminate"], description: "Reveal a smoother, more radiant complexion with this non-invasive combination of a glycolic peel and LED Light Therapy.", slug: "intense-radiance" },
      { name: "Hydro-Microdermabrasion", duration: "45 minutes", tags: ["Strengthen", "Restore", "Brighten"], description: "Exfoliates and refreshes skin cells while gently removing debris from your pores without stripping your skin of its natural oils.", slug: "hydro-microdermabrasion" },
      { name: "Electro-Mesotherapy", duration: "30 minutes", tags: ["Plump", "Luminous", "Glowing"], description: "Brightens, plumps and smooths your skin tone by infusing endota's high-performance serums deeply into your skin using ionwave™ technology.", slug: "electro-mesotherapy" },
      { name: "Intense Renewal Facial", duration: "75 minutes", tags: ["Brighten", "Hydrate", "Renew"], description: "Even, brighten and hydrate your skin without downtime with the combination of electro-mesotherapy, LED Light Therapy, glycolic peel and peptide-infused sheet mask.", slug: "intense-renewal-facial" },
      { name: "Laser Genesis", duration: "45+ minutes", tags: ["Rejuvenate", "Stimulate", "Smooth"], description: "A pain-free laser treatment that stimulates skin cells and encourages skin renewal, visibly reducing fine lines, sun damage, acne scarring and more.", slug: "laser-genesis" },
      { name: "Medi Glow Laser Genesis Facial", duration: "75 minutes", tags: ["Firm", "Smooth", "Resurface"], description: "Combines three advanced therapies: Laser Genesis, a clinical-strength peel and LED Light Therapy to give you brighter, firmer and visibly smoother skin.", slug: "medi-glow-laser-genesis" },
      { name: "Power Series", duration: "4 × 30-minute sessions", tags: ["Repair", "Target", "Refine"], description: "Target skin concerns in four 30-minute intensive sessions. Available with Glycolic Peel, LED Light Therapy and Hydro-Microdermabrasion.", slug: "power-series" },
    ],
  },
  {
    id: "massage",
    title: "massage",
    image: massageHero,
    description: "",
    treatments: [
      { name: "Soothing Stones", duration: "80 minutes", tags: ["Release", "Restore", "Rebalance"], description: "Soothing warm stones and a calming massage sequence soothes the mind and body while warming and relaxing the muscles.", slug: "soothing-stones" },
      { name: "Pregnancy", duration: "60 minutes", tags: ["Nourish", "Nurture", "Soothe"], description: "Performed by a qualified therapist for mums-to-be in their second or third trimester, helping to relieve tension, calm your mind and melt away aches and pains.", slug: "pregnancy" },
      { name: "Organic Relax", duration: "60 minutes", tags: ["Nurture", "Nourish", "Calm"], description: "Unwind with this full-body massage that focuses on bringing relaxation to both your body and mind.", slug: "organic-relax" },
      { name: "Relax Express", duration: "30 minutes", tags: ["Relieve", "Ease", "Calm"], description: "An express version of our most-loved massage that focuses on bringing relaxation to both your body and mind.", slug: "relax-express" },
      { name: "Aromatherapy Massage", duration: "60 minutes", tags: ["Calm", "Relieve", "Uplift"], description: "A sensory treatment combining massage, aromatherapy and heat pillows to help you reach a deep state of calm.", slug: "aromatherapy-massage" },
      { name: "Rest & Restore", duration: "60 minutes", tags: ["Relieve", "Treat", "Balance"], description: "A detoxifying back scrub promotes circulation, while a specialised massage sequence using our bestselling Clove & Mint Recovery Balm warms and helps to release muscle tensions.", slug: "rest-restore" },
      { name: "Remedial", duration: "60 minutes", tags: ["Treat", "Support", "Improve"], description: "Performed by a qualified Remedial Therapist, this deep tissue massage focuses on areas of muscular tension and localised aches and pains.", slug: "remedial" },
      { name: "Customised", duration: "60 minutes", tags: ["Relieve", "Improve", "Treat"], description: "A tailored treatment designed to target the areas of stress and tension affecting you the most.", slug: "customised" },
    ],
  },
  {
    id: "packages",
    title: "spa packages",
    image: packagesHero,
    description:
      "Surrender to an indulgent day spa experience that will blissfully lift your spirits and engage all your senses. We're passionate about self-care, and our spa packages offer the perfect antidote to the stresses of everyday life.",
    treatments: [
      { name: "Immerse", duration: "225 minutes", tags: ["Indulge", "Replenish", "Restore"], description: "Feel restored from head-to-toe with a full body exfoliation, soothing body massage, warm oil cocoon, hydrating facial and perfect pedicure.", slug: "immerse" },
      { name: "Rejuvenate", duration: "120 minutes", tags: ["Hydrate", "Revitalise", "Release"], description: "Take time for a complete body reset with a foot soak, full body exfoliation, warm oil cocoon, soothing body massage and nourishing facial.", slug: "rejuvenate" },
      { name: "Revive", duration: "90 minutes", tags: ["Relieve", "Nourish", "Relax"], description: "Relax and recharge with a warm foot soak, relaxing massage, organic facial and nail care to the feet.", slug: "revive" },
      { name: "Surrender", duration: "75 minutes", tags: ["Hydrate", "Balance", "Recharge"], description: "Surrender to relaxation with elements of our two signature treatments – Organic Relax Massage and Organic Infusion Facial – in one visit.", slug: "surrender" },
      { name: "Pregnant Pause", duration: "75 minutes", tags: ["Soothe", "Nurture", "Calm"], description: "For mums-to-be in all trimesters, feel calm and fully nurtured with this combination of calming pregnancy massage and nourishing facial.", slug: "pregnant-pause" },
      { name: "Detox", duration: "60 minutes", tags: ["Purify", "Nourish", "Invigorate"], description: "This invigorating body treatment offers a body exfoliation with a dry body brush and a purifying clay cocoon, designed to improve your circulation and eliminate toxins.", slug: "detox" },
      { name: "Grounding Spa Pedicure", duration: "60 minutes", tags: ["Refresh", "Restore", "Soothe"], description: "Sooth hardworking feet with this synergy of scrub, massage and healing stones, finished with a relaxing scalp massage to calm the mind.", slug: "grounding-spa-pedicure" },
      { name: "Renew Spa Package", duration: "75 minutes", tags: ["Recharge", "Smooth", "Restore"], description: "Experience the hydrating benefits of a facial, relaxing benefits of a massage and skin-smoothing benefits of a dry body brush in one complete treatment.", slug: "renew-spa-package" },
    ],
  },
  {
    id: "beauty-services",
    title: "beauty services",
    image: beautyHero,
    description:
      "endota offers a range of treatments to keep you looking and feeling like your best me. Whether it's a manicure, pedicure, tanning or tinting — from fingertips to toes, our endota therapists are trained to provide a beauty service beyond mere maintenance.",
    treatments: [
      { name: "Waxing", duration: "Duration varies", tags: [], description: "Remove unwanted hair from the root. Treatment areas include leg, arm and facial waxing, as well as female intimate waxing.", slug: "waxing" },
      { name: "Manicures", duration: "30 – 60 minutes", tags: [], description: "A deluxe manicure including a hand scrub and massage, followed by nail and cuticle care, and polish with your colour of choice.", slug: "manicures" },
      { name: "Pedicures", duration: "30 – 45 minutes", tags: [], description: "A deluxe pedicure including an exfoliating scrub, foot and leg massage, followed by nail and cuticle care, and polish with your colour of choice.", slug: "pedicures" },
      { name: "Organics™ Spray Tan", duration: "Duration varies", tags: [], description: "An even, natural and long-lasting spray tan that achieves a healthy glow without the harmful effects of the sun.", slug: "organics-spray-tan" },
      { name: "Tinting", duration: "Duration varies", tags: [], description: "Gentle tinting formulas that help lashes appear more voluminous and brows more defined.", slug: "tinting" },
    ],
  },
];
