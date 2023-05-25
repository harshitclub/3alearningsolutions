import PageHeader from "@/components/PageHeader/PageHeader";
import "./style.css";

export default function CalendarLayout({ children }) {
  return (
    <main className="flex alignCenter justifyCenter width100 flexColumn">
      <PageHeader heading="Program Calendar" className="calenderHeadBorder" />
      {children}
    </main>
  );
}
