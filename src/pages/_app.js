import "@/styles/main.css";
import ScrollProvider from "./scrollContext";
// import "./home.css";

export default function App({ Component, pageProps }) {
  return (
    <ScrollProvider>
    <Component {...pageProps} />
    </ScrollProvider>
  )
  
}
