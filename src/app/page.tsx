import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>ThreeDive Embed Sample</h1>
      <div id="td-0WtPm9cA1J" data-width="100%"  data-parent-url="https://metabirds.github.io/threedive-embed-sample"></div>
      {/* using next/script to load embed.js for working with next.js */}
      <Script src="https://app.threedive.ai/embed.js?s=0WtPm9cA1J"></Script>
    </>
  );
}
