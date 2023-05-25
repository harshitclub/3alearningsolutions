import PageHeader from "@/components/PageHeader/PageHeader";

export default function ELearningLayout({ children }) {
  return (
    <main className="eLearning flex alignCenter justifyCenter flexColumn width100">
      <PageHeader heading="E - Learning" className="eLearningHeadBorder" />
      {children}
    </main>
  );
}
