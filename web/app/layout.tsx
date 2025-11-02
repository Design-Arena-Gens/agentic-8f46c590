export const metadata = {
  title: 'Factura - ?tems',
  description: 'UI profesional y responsiva para ?tems de factura',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
