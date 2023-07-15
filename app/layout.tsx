import CustomProviders from "../components/customProviders";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: suppressHydrationWarning is a hack to avoid warnings
  // see: https://legacy.reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <CustomProviders>{children}</CustomProviders>
      </body>
    </html>
  );
}
