import PageHeader from "@/components/PageHeader/PageHeader";

export default function CorporateLayout({ children }) {
  return (
    <main className="flex width100 alignCenter justifyCenter flexColumn">
      <PageHeader heading="Corporate Training" className="marginBottom1" />
      {children}
    </main>
  );
}
