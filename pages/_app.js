import Emailsubmit from "@/components/Emailsubmit";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Whatsapp from "@/components/Whatsapp";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import TopLoadingLine from "../components/TopLoadingLine";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Check if the current page is index page
  const hideHeader = router.pathname === '/';
  // const hidegallary = router.pathname === '/gallery';
  return <>

    {!hideHeader && <Header />}
    <main>
      <TopLoadingLine />
      <Component {...pageProps} />
    </main>
    {/* <ContactForm/> */}
    <Emailsubmit />
    <Footer />
    <ScrollToTopButton />
    <Whatsapp />
  </>

}
