import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

export const metadata = {
  title: "M&S Bussing",
  description: "School Busses",
};

export default function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className="container mx-auto bg-gray-50">
        <Navbar />
        <main>
          <GoogleCaptchaWrapper>
          { children }
          </GoogleCaptchaWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
