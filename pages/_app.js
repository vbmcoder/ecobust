import Emailsubmit from "@/components/Emailsubmit";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Check if the current page is index page
  const hideHeader = router.pathname === '/';
  const hidegallary = router.pathname === '/gallery';
  return <>

    {!hideHeader && !hidegallary && <Header />}
    <main>
        <Component {...pageProps} />
    </main>
    {/* <ContactForm/> */}
    <Emailsubmit />
    <Footer />
    <ScrollToTopButton />
  </>

}
