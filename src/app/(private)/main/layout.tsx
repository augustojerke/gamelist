import Header from "@/components/common/header";
import QueryProvider from "@/components/providers/queryClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
