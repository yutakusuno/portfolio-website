import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CustomProvider from '../components/custom-provider';
import './globals.css';

// NOTE: suppressHydrationWarning is a hack to avoid warnings
// see: https://legacy.reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body>
        <CustomProvider theme={'dark'}>{children}</CustomProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
