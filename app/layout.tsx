import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <body className="container mx-auto bg-gray-300 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          { children }
        </main>
        <Footer />
      </body>
    </html>
  );
}
