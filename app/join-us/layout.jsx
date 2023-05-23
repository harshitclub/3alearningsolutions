import PageHeader from "@/components/PageHeader/PageHeader";

export default function JoinLayout({ children }) {
  return (
    <main className="joinUs flex flexColumn width100 alignCenter justifyCenter">
      <PageHeader heading="Join Us" />
      {children}
    </main>
  );
}
