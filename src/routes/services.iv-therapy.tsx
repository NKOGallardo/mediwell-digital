import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "../components/ServicePage";
import { getCategoryBySlug } from "../lib/services";

const category = getCategoryBySlug("iv-therapy")!;

export const Route = createFileRoute("/services/iv-therapy")({
  component: () => <ServicePage category={category} />,
  head: () => ({
    meta: [
      { title: `${category.title} — Meridian Health Centre` },
      { name: "description", content: `${category.blurb} Book ${category.title.toLowerCase()} at Meridian Health Centre in Noordwyk, Midrand.` },
      { property: "og:title", content: `${category.title} — Meridian Health Centre` },
      { property: "og:description", content: category.blurb },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/iv-therapy" },
    ],
    links: [{ rel: "canonical", href: "/services/iv-therapy" }],
  }),
});
