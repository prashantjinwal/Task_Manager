import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  
  const [ProjectsState, setProjectState] = useState({
    SelectedProjectID:undefined,
    project:[]
  })

  function handleProjectStart(){
    setProjectState(prevContent => {
      return{
        ...prevContent,
        SelectedProjectID:null,
      };
    })
  }
  let content;


  if(ProjectsState.SelectedProjectID === undefined){
    content = <NoProjectSelected onStartProject={handleProjectStart} />
  }else if (ProjectsState.SelectedProjectID === null){
    content = <NewProject onAdd={handleAddProject} />
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectID = Math.random()
      const newProject = {
        ...projectData,
        Id:projectID 
      }
      return{
        ...prevState,
        SelectedProjectID:undefined,
        project:[...prevState.project, newProject ]
      }
    })
    // console.log(ProjectsState)
  }
///
  return (
    <main className="h-screen flex gap-10">
      <ProjectsSidebar onStartProject={handleProjectStart} projects={ProjectsState.project} />
      {content}
      
    </main>
  );
}

export default App;
