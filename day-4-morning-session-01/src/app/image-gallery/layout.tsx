export default function ImageGalleryLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <section>
      <div>{children}</div>
      <div>{modal}</div>
    </section>
  );
}
