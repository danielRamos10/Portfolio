import "./content-card.scss";
import { Card } from "react-bulma-components";

interface CardProps {
  children: JSX.Element;
}
export default function ContentCard({ children }: CardProps) {
  return (
    <div className="about-card">
      <Card>{children}</Card>
    </div>
  );
}
