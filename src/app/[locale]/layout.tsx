import "aos/dist/aos.css";
import type {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from "next-intl";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title:
    "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры",
  description:
    "Udevs - компания по разработке веб и мобильных приложения под заказ. Разработка IT cистемы любого уровня сложности в удобные для вас сроки.",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = useMessages();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
