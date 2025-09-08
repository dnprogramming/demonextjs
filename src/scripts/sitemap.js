const fs = require('fs');
const globby = require('globby');

const addPage = (page) => {
  const pathname = page.replace('src/app', '').replace('/page.tsx', '');

  return `<url>
    <loc>${`${process.env.WEBSITE_URL}${pathname}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
};

const generateSitemap = async () => {
  const pages = await globby(['src/app/**/page.tsx']);

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
  </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

generateSitemap();