import "./project-card.scss";
import { Card } from "react-bulma-components";

interface ProjectCardProps {
  children: JSX.Element;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return (
    <div className="project-card">
      <Card>
        {children}
      </Card>
    </div>
  );
};

export default ProjectCard;
