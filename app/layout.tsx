import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CustomProviders from "../components/custom-providers";
import "./globals.css";

const theme = "dark";

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
        <CustomProviders theme={theme}>{children}</CustomProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
