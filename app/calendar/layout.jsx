import PageHeader from "@/components/PageHeader/PageHeader";

export default function CalendarLayout({ children }) {
  return (
    <main className="flex alignCenter justifyCenter width100 flexColumn">
      <PageHeader heading="Program Calendar" />
      {children}
    </main>
  );
}
