import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const PrincipalLayoutWithNoSSR = dynamic(
  () => import("@/components/layouts/principal-layout"),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrincipalLayoutWithNoSSR>
      <Component {...pageProps} />
    </PrincipalLayoutWithNoSSR>
  );
}
