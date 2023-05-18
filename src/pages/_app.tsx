import PrincipalLayout from "@/components/layouts/principal-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrincipalLayout>
      <Component {...pageProps} />
    </PrincipalLayout>
  );
}
