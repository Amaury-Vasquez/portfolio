import { useProjects } from './useProjects';
import { ProjectPage, Layout } from './styles';
import { Project } from '../../components/Project';

const Projects = () => {
  const { projectList } = useProjects();

  return (
    <ProjectPage>
      <Layout>
        {projectList.map((project, i) => (
          <Project
            data={project}
            key={project.name + i + 'project-component'}
          />
        ))}
      </Layout>
    </ProjectPage>
  );
};

export default Projects;
