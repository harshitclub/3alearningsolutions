import PageHeader from "@/components/PageHeader/PageHeader";

export default function ProgramsLayout({ children }) {
  return (
    <main className="programs flex alignCenter justifyCenter flexColumn width100">
      <PageHeader heading="Browse Programs" />
      {children}
    </main>
  );
}
