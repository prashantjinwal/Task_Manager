import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  
  const [ProjectsState, setProjectState] = useState({
    SelectedProjectID: undefined,
    projects: []
  })

  function handleSelectedProject(id){
    setProjectState((prevContent) => {
      return{
        ...prevContent,
        SelectedProjectID: id,
      };
    })
  }

  function handleProjectStart(){
    setProjectState((prevContent) => {
      return{
        ...prevContent,
        SelectedProjectID: null,
      };
    })
  }

  const selectedproject = ProjectsState.projects.find((project) => project.id === ProjectsState.SelectedProjectID)


  let content = <SelectedProject project={selectedproject} />

  function handleCancel(){
    setProjectState((prevContent) => {
      return{
        ...prevContent,
        SelectedProjectID: undefined,
      };
    })
  }


  if(ProjectsState.SelectedProjectID === undefined){
    content = ( <NoProjectSelected onStartProject={handleProjectStart} /> );
  }else if (ProjectsState.SelectedProjectID === null){
    content = ( <NewProject onAdd={handleAddProject} onCancel={handleCancel} /> );
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectID = Math.random()
      const newProject = {
        ...projectData,
        id:projectID 
      }
      return{
        ...prevState,
        SelectedProjectID:undefined,
        projects:[...prevState.projects, newProject ]
      }
    })
    // console.log(ProjectsState)
  }
///
  return (
    <main className="h-screen flex gap-10">
      <ProjectsSidebar onSelectProject={handleSelectedProject} onStartProject={handleProjectStart}  projects={ProjectsState.projects} />
      {content}
      
    </main>
  );
}

export default App;
