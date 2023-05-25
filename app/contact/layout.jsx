import PageHeader from "@/components/PageHeader/PageHeader";

export default function ContactLayout({ children }) {
  return (
    <main className="contact flex alignCenter justifyCenter flexColumn width100">
      <PageHeader
        heading="Get In Touch With Us"
        className="contactHeadBorder"
      />
      {children}
    </main>
  );
}
