const containerId = "GTM-5THFBQHW";

export function GoogleTagManagerHead() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtm.js?id=${containerId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: [
            "window.dataLayer = window.dataLayer || [];",
            "function gtag(){dataLayer.push(arguments);}",
            "gtag('js', new Date());",
          ].join("\n"),
        }}
      />
    </>
  );
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
