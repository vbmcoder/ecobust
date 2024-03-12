import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Check if the current page is index page
  const hideHeader = router.pathname === '/';
  return <>
    {!hideHeader && <Header />}
    <main>
      <Component {...pageProps} />;
    </main>
    <Footer/>

  </>

}
