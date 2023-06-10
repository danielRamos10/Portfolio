import "./project-card.scss";
import { Card, Image } from "react-bulma-components";

interface ProjectCardProps {
  children: JSX.Element;
  image: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ children, image }) => {
  return (
    <div className="project-card">
      <Card>
        <div className="card-parent">
          <div className="card-content-children">{children}</div>
          <div className="card-image" >
            <Image src={image} alt="image" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
