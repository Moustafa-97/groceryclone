/* eslint-disable @typescript-eslint/no-explicit-any */

import Navbar from "@/components/aaaNavbar/Navbar";
import Footer from "@/components/zzFooter/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params: { locale: locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Fetch messages server-side
  const messages = await getMessages(locale as any);
  return (
    <section lang="en">
      <NextIntlClientProvider messages={messages}>
        <header>
          <Navbar />
        </header>
        <div>{children}</div>
        <footer>
          <Footer />
        </footer>
      </NextIntlClientProvider>
    </section>
  );
}
