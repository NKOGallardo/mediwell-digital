import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import { getCategoryBySlug } from "../lib/services";

const category = getCategoryBySlug("reproductive-health")!;

export const Route = createFileRoute("/services/reproductive-health")({
  component: () => <ServicePage category={category} />,
  head: () => ({
    meta: [
      { title: `${category.title} — Elegant Healthcare Centre` },
      { name: "description", content: `${category.blurb} Book ${category.title.toLowerCase()} at Elegant Healthcare Centre in Noordwyk, Midrand.` },
      { property: "og:title", content: `${category.title} — Elegant Healthcare Centre` },
      { property: "og:description", content: category.blurb },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/reproductive-health" },
    ],
    links: [{ rel: "canonical", href: "/services/reproductive-health" }],
  }),
});
