import Spinner from "../Spinner";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
  return (
    <>
      <Spinner />
      <MobileMenu />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
