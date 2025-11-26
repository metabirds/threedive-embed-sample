import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>ThreeDive Embed Sample</h1>
      <div id="td-zU6Oi4Z7BA"></div>
      <Script src="http://localhost:5173/embed.js?s=zU6Oi4Z7BA" />
    </>
  );
}
