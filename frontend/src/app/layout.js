import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "StreamIt",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "0px", margin: "0px" }}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
