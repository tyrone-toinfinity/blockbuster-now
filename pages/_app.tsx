import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const metadata = {
  title:
    "Blockbuster Now - Watch TV Shows Online, Watch Movies Online by create next app",
  description:
    "Watch Blockbuster Now movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </>
  );
}
