import { useEffect } from "react";

type MetaAttr = { name?: string; property?: string; content: string };

function upsertMeta(attr: MetaAttr) {
  const selector = attr.name ? `meta[name="${attr.name}"]` : `meta[property="${attr.property}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    if (attr.name) el.setAttribute("name", attr.name);
    if (attr.property) el.setAttribute("property", attr.property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", attr.content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo(opts: {
  title: string;
  description?: string;
  meta?: MetaAttr[];
  canonical?: string;
  jsonLd?: unknown;
}) {
  useEffect(() => {
    document.title = opts.title;
    if (opts.description) upsertMeta({ name: "description", content: opts.description });
    opts.meta?.forEach(upsertMeta);
    if (opts.canonical) upsertLink("canonical", opts.canonical);

    let script: HTMLScriptElement | null = null;
    if (opts.jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(opts.jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts.title]);
}
