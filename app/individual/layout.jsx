import PageHeader from "@/components/PageHeader/PageHeader";

export default function IndividualLayout({ children }) {
  return (
    <main className="flex alignCenter justifyCenter flexColumn width100">
      <PageHeader heading="Individual" />
      {children}
    </main>
  );
}
