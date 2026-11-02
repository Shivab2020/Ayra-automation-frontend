import { contentPages } from '@/data/content';

export const siteUrl = 'https://ayraautomation.in';
export const indexing = import.meta.env.PROD && import.meta.env['VITE_PUBLIC_INDEXING'] === 'true';
export function contentHead(slug: string) {
  const page = contentPages.find(p => p.slug === slug);
  const title = page ? `${page.title} | Ayra Automation` : 'Resources | Ayra Automation';
  const description = page?.description ?? 'Product documentation and practical guides to SEO operations, research, review and AI discovery.';
  return { meta: [
    { title }, { name: 'description', content: description },
    { name: 'robots', content: indexing ? 'index, follow' : 'noindex, nofollow' },
    { property: 'og:title', content: title }, { property: 'og:description', content: description },
    { property: 'og:url', content: `${siteUrl}/${slug}` },
    { property: 'og:type', content: page?.article ? 'article' : 'website' },
  ], links: [{ rel: 'canonical', href: `${siteUrl}/${slug}` }] };
}

export function ContentPage({ slug }: { slug: string }) {
  const page = contentPages.find(p => p.slug === slug);
  const article = page?.article ?? false;
  const title = page?.title ?? 'Resources for clearer SEO work';
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Ayra Automation', url: `${siteUrl}/` },
    { '@type': article ? 'Article' : 'WebPage', '@id': `${siteUrl}/${slug}#page`, url: `${siteUrl}/${slug}`,
      ...(article ? { headline: title, author: { '@id': `${siteUrl}/#organization` }, datePublished: '2026-11-02' } : { name: title }),
      description: page?.description ?? 'Guides and documentation for SEO operations.',
      publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en',
      ...(article ? { mainEntityOfPage: `${siteUrl}/${slug}` } : {}),
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: title, item: `${siteUrl}/${slug}` },
    ] },
  ] };
  return <div className="site-shell content-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="content-header"><a className="wordmark" href="/">Ayra Automation</a>
      <nav aria-label="Main navigation"><a href="/seo-automation">Product</a><a href="/resources">Resources</a><a href="/help">Help</a><a href="/about">About</a></nav></header>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main id="main" className="content-main">
      <nav className="content-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><span>{page?.article ? 'Guide' : slug.startsWith('help') ? 'Help' : 'Resources'}</span></nav>
      <article><header className="content-intro"><h1>{title}</h1><p>{page?.description ?? 'Explore product workflows, documentation and practical guides. Each page connects a specific question to a useful next step.'}</p>
        {article && <p className="content-byline">By <a href="/about">Ayra Automation</a> · Published <time dateTime="2026-11-02">2 November 2026</time> · <a href="/editorial-policy">Editorial policy</a></p>}</header>
        {page && <><nav className="content-toc" aria-label="On this page"><strong>On this page</strong>{page.sections.map((s,i) => <a key={s.title} href={`#section-${i}`}>{s.title}</a>)}</nav>
          {page.sections.map((s,i) => <section className="content-section" id={`section-${i}`} key={s.title}><h2>{s.title}</h2>{s.text.map(t => <p key={t}>{t}</p>)}</section>)}
          {page.sources.length > 0 && <section className="content-section"><h2>Sources and further reading</h2><ul>{page.sources.map(s => <li key={s}><a href={s}>{s.includes('openai') ? 'OpenAI crawler documentation' : s.includes('ai-features') ? 'Google Search: AI features and your website' : 'Google Search: helpful, reliable content'}</a></li>)}</ul></section>}</>}
      </article>
      <section className="content-related" aria-labelledby="related-title"><h2 id="related-title">{page ? 'Continue exploring' : 'Browse the library'}</h2><div className="content-card-grid">{contentPages.filter(p => p.slug !== slug).map(p => <a className="content-card" key={p.slug} href={`/${p.slug}`}><span>{p.article ? 'Guide' : p.slug.startsWith('help') ? 'Documentation' : 'Product & company'}</span><h3>{p.title}</h3><p>{p.description}</p><span aria-hidden="true">Read more →</span></a>)}</div></section>
    </main>
    <footer className="content-footer"><a className="wordmark" href="/">Ayra Automation</a><nav aria-label="Footer"><a href="/resources">Resources</a><a href="/help">Documentation</a><a href="/about">About</a><a href="/editorial-policy">Editorial policy</a></nav><p>© {new Date().getFullYear()} Ayra Automation. Evidence first. Human review. Clear follow-up.</p></footer>
  </div>;
}
