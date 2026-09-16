import { URL } from "root/config";

// Generated rather than hand-written: the previous public/sitemap.xml carried
// hardcoded lastmod dates that silently went stale every time a page changed.
const PAGES = [
  { path: "", changefreq: "monthly", priority: "1.0" },
  { path: "presentations", changefreq: "monthly", priority: "0.8" },
  { path: "patients", changefreq: "monthly", priority: "0.8" },
];

const buildSitemap = (lastmod) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  ({ path, changefreq, priority }) => `  <url>
    <loc>${URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

// The page itself renders nothing; getServerSideProps writes the XML.
const Sitemap = () => null;

export async function getServerSideProps({ res }) {
  // Date of the build/response, which is the closest honest answer we have
  // without tracking per-page edit times.
  const lastmod = new Date().toISOString().split("T")[0];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(buildSitemap(lastmod));
  res.end();

  return { props: {} };
}

export default Sitemap;
