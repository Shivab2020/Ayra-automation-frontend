import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { GoogleTagManagerBody, GoogleTagManagerHead } from "@/components/GoogleTagManager";

describe("Google Tag Manager snippets", () => {
  it("loads the configured container and initializes its data layer in the head", () => {
    const markup = renderToStaticMarkup(<GoogleTagManagerHead />);

    expect(markup).toContain('src="https://www.googletagmanager.com/gtm.js?id=GTM-5THFBQHW"');
    expect(markup).toContain("window.dataLayer = window.dataLayer || [];");
    expect(markup).toContain("function gtag(){dataLayer.push(arguments);}");
    expect(markup).toContain("gtag('js', new Date());");
  });

  it("places the no-script container fallback in a body-ready snippet", () => {
    const markup = renderToStaticMarkup(<GoogleTagManagerBody />);

    expect(markup).toContain(
      '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5THFBQHW"',
    );
    expect(markup).toContain('height="0" width="0"');
  });
});
