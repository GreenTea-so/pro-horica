import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <title>ProHoreca</title>
      <body>
        <div id="body">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}