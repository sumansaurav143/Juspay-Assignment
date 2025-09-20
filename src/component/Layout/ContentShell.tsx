import "../../App.css";

export default function ContentShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="content-shell">{children}</div>;
}