import { contentPages, sectionalLinks } from '@/data/public-content';
import type { GuideBlock } from '@/data/seo-guides';
import { ClientOnly } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';

export const siteUrl = 'https://ayraautomation.in';
export const organizationId = `${siteUrl}/#organization`;
export const indexing = import.meta.env.PROD && import.meta.env['VITE_PUBLIC_INDEXING'] === 'true';

function inlineContent(text: string) {
  return text.split(/(\[[^\]]+\]\((?:\/(?!\/)|https:\/\/)[^\s)]+\))/g).map((piece, index) => {
    if (index % 2 === 0) return piece;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(piece);
    return link ? <a key={index} href={link[2]}>{link[1]}</a> : piece;
  });
}

function ArticleBlock({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case 'paragraph':
      return <p>{inlineContent(block.text)}</p>;
    case 'list':
      return <ul>{block.items.map((item) => <li key={item}>{inlineContent(item)}</li>)}</ul>;
    case 'table':
      return (
        <div className="article-table">
          <table>
            <caption>Illustrative example</caption>
            <thead><tr>{block.columns.map((col) => <th key={col} scope="col">{col}</th>)}</tr></thead>
            <tbody>{block.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={block.columns[index]}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
  }
}
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
    { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ], links: [{ rel: 'canonical', href: `${siteUrl}/${slug}` }] };
}

const founder = {
  name: 'Shivanand Billur',
  image: `${siteUrl}/images/founder-shivanand-billur.jpg`,
  description: 'I’m building Ayra Automation around a simple idea: technology should make important work easier to understand and easier to review. For website teams, that means helping them see what needs attention, prepare a change with its evidence, and keep a clear record of what happened after review. Ayra is still being built. Search results depend on many factors, so the goal is to support better decisions and honest measurement—not promise a particular ranking or growth result.',
};

function PublicHeader() {
  return <header className="content-header"><a className="wordmark" href="/">Ayra Automation</a>
    <nav aria-label="Main navigation"><a href="/seo-automation">Product</a><a href="/resources">Resources</a><a href="/help">Help</a><a href="/about">About</a><a href="/contact">Contact</a></nav></header>;
}

function PublicFooter() {
  return <footer className="content-footer"><a className="wordmark" href="/">Ayra Automation</a><nav aria-label="Footer"><a href="/resources">Resources</a><a href="/help">Documentation</a><a href="/about">About</a><a href="/contact">Contact</a><a href="/editorial-policy">Editorial policy</a></nav><p>© {new Date().getFullYear()} Ayra Automation. Evidence first. Human review. Clear follow-up.</p></footer>;
}

export function ContentPage({ slug }: { slug: string }) {
  const page = contentPages.find(p => p.slug === slug);
  const article = page?.article ?? false;
  const title = page?.title ?? 'Resources for clearer SEO work';
  const published = page?.datePublished ?? '2026-11-02';
  const modified = page?.dateModified;
  const dateLabel = (date: string) => new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(date));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Ayra Automation', url: `${siteUrl}/`, ...(slug === 'about' ? { founder: { '@id': `${siteUrl}/about#founder` } } : {}) },
    ...(slug === 'about' ? [{ '@type': 'Person', '@id': `${siteUrl}/about#founder`, name: founder.name, jobTitle: 'Founder', image: founder.image, description: founder.description, worksFor: { '@id': `${siteUrl}/#organization` } }] : []),
    { '@type': article ? 'Article' : 'WebPage', '@id': `${siteUrl}/${slug}#page`, url: `${siteUrl}/${slug}`,
      ...(article ? { headline: title, author: { '@id': organizationId }, datePublished: published, ...(modified ? { dateModified: modified } : {}) } : { name: title }),
      description: page?.description ?? 'Guides and documentation for SEO operations.',
      publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en',
      ...(article ? { mainEntityOfPage: `${siteUrl}/${slug}` } : {}),
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: title, item: `${siteUrl}/${slug}` },
    ] },
  ] };
  const sectionLabel = slug === 'about' ? 'About' : slug === 'editorial-policy' ? 'Company policies' : slug.startsWith('help') ? 'Help' : ['seo-automation', 'seo-audit-workflow', 'keyword-competitor-research'].includes(slug) ? 'Product' : 'Resources';
  return <div className="site-shell content-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <PublicHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main id="main" className="content-main">
      <nav className="content-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><span>{page?.article ? 'Guide' : sectionLabel}</span></nav>
      <article><header className="content-intro"><h1>{title}</h1><p>{page?.description ?? 'Explore product workflows, documentation and practical guides. Each page connects a specific question to a useful next step.'}</p>
        {article && <p className="content-byline">By <a href="/about">Ayra Automation</a> · {modified ? 'Updated' : 'Published'} <time dateTime={modified ?? published}>{dateLabel(modified ?? published)}</time> · <a href="/editorial-policy">Editorial policy</a></p>}</header>
        {slug === 'about' && <section className="founder-panel" aria-labelledby="founder-name"><img src="/images/founder-shivanand-billur.jpg" alt="Shivanand Billur, founder of Ayra Automation" width="360" height="485" loading="lazy" decoding="async" /><div><p className="content-eyebrow">Founder</p><h2 id="founder-name">{founder.name}</h2><p>{founder.description}</p><a className="content-action" href="/contact">Contact Ayra <span aria-hidden="true">→</span></a></div></section>}
        {page && <><nav className="content-toc" aria-label="On this page"><strong>On this page</strong>{page.sections.map((s,i) => <a key={s.title} href={`#section-${i}`}>{s.title}</a>)}</nav>
          {page.sections.map((s,i) => {
            const link = sectionalLinks[slug]?.[s.title];
            return <section className="content-section" id={`section-${i}`} key={s.title}>
              <h2>{s.title}</h2>
              {s.blocks.map((block, index) => <ArticleBlock key={index} block={block} />)}
              {link && <p>{link.text} <a href={link.href}>{link.label}</a>.</p>}
            </section>;
          })}
          {page.sources.length > 0 && <section className="content-section"><h2>Sources and further reading</h2><ul>{page.sources.map(s => <li key={s}><a href={s}>{s.includes('openai') ? 'OpenAI crawler documentation' : s.includes('ai-features') ? 'Google Search: AI features and your website' : 'Google Search: helpful, reliable content'}</a></li>)}</ul></section>}</>}
      </article>
      <section className="content-related" aria-labelledby="related-title"><h2 id="related-title">{page ? 'Continue exploring' : 'Browse the library'}</h2><div className="content-card-grid">{contentPages.filter(p => p.slug !== slug).map(p => <a className="content-card" key={p.slug} href={`/${p.slug}`}><span>{p.article ? 'Guide' : p.slug.startsWith('help') ? 'Documentation' : 'Product & company'}</span><h3>{p.title}</h3><p>{p.description}</p><span aria-hidden="true">Read more →</span></a>)}</div></section>
    </main>
    <PublicFooter />
  </div>;
}

export function ContactPage() {
  const [status, setStatus] = useState('');
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Ayra Automation', url: `${siteUrl}/`, email: 'info@ayraautomation.in', contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'info@ayraautomation.in', url: `${siteUrl}/contact` } },
    { '@type': 'ContactPage', '@id': `${siteUrl}/contact#page`, name: 'Request trial access or contact Ayra Automation', url: `${siteUrl}/contact`, about: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` }, { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` }] },
  ] };
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const website = String(form.get('website') ?? '').trim();
    const topic = String(form.get('topic') ?? 'Trial access');
    const message = String(form.get('message') ?? '').trim();
    const body = [`Name: ${name}`, `Email: ${email}`, `Website: ${website || 'Not provided'}`, `Topic: ${topic}`, '', message || 'I would like to learn more about Ayra Automation trial access.'].join('\n');
    window.location.href = `mailto:info@ayraautomation.in?subject=${encodeURIComponent(`Ayra Automation — ${topic}`)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open a draft. Review and send it to Ayra; this form does not send or store your request.');
  }
  return <div className="site-shell content-shell">
    <a className="skip-link" href="#main">Skip to content</a><PublicHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <main id="main" className="content-main contact-main">
      <nav className="content-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><span>Contact</span></nav>
      <div className="contact-layout">
        <section className="contact-intro" aria-labelledby="contact-title"><p className="content-eyebrow">Trial access &amp; questions</p><h1 id="contact-title">Let’s talk about your website.</h1><p>Tell us a little about your site and what you want to improve. We’ll use your note to understand the trial request.</p><div className="contact-email"><span>Email</span><a href="mailto:info@ayraautomation.in">info@ayraautomation.in</a></div><p className="contact-note">No account is created by this form. Your email app opens a draft that you can review and send.</p></section>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Request trial access</h2>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required />
          <label htmlFor="contact-email">Work email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
          <label htmlFor="contact-website">Website <span>(optional)</span></label><input id="contact-website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="https://example.com" maxLength={300} />
          <label htmlFor="contact-topic">What are you interested in?</label><select id="contact-topic" name="topic" defaultValue="Trial access"><option>Trial access</option><option>Product information</option><option>Agency use</option><option>Something else</option></select>
          <label htmlFor="contact-message">Anything we should know? <span>(optional)</span></label><textarea id="contact-message" name="message" rows={4} maxLength={2000} placeholder="A sentence about your website or goals is enough." />
          <p className="contact-privacy">The details you enter are added to an email draft on your device. They are not submitted to or stored by this website.</p>
          <ClientOnly fallback={<button className="button-primary contact-submit" type="submit" disabled>Open email draft</button>}>
            <button className="button-primary contact-submit" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
          </ClientOnly>
          <p className="contact-status" role="status" aria-live="polite">{status}</p>
          <p className="contact-fallback">If the draft does not open, email <a href="mailto:info@ayraautomation.in">info@ayraautomation.in</a>.</p>
        </form>
      </div>
    </main><PublicFooter />
  </div>;
}
