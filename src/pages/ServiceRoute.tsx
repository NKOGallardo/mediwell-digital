import { useParams, Navigate } from "react-router-dom";
import { ServicePage } from "../components/ServicePage";
import { getCategoryBySlug } from "../lib/services";
import { useSeo } from "../lib/seo";
import { CLINIC } from "../lib/clinic";

export default function ServiceRoute() {
  const { slug } = useParams();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  useSeo({
    title: category ? `${category.title} — ${CLINIC.name}` : `Services — ${CLINIC.name}`,
    description: category ? `${category.blurb} Book ${category.title.toLowerCase()} at ${CLINIC.name} in Noordwyk, Midrand.` : undefined,
    canonical: category ? `/services/${category.slug}` : undefined,
    meta: category ? [
      { property: "og:title", content: `${category.title} — ${CLINIC.name}` },
      { property: "og:description", content: category.blurb },
      { property: "og:type", content: "website" },
    ] : undefined,
  });

  if (!category) return <Navigate to="/" replace />;
  return <ServicePage category={category} />;
}
