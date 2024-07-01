import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  
  const [ProjectsState, setProjectState] = useState({
    SelectedProjectID: undefined,
    projects: [],
    tasks: []
  })


  function handleAddTask(text){
    setProjectState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.SelectedProjectID,
        id: taskId 
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  

  function handleDeleteTask(id) {
    setProjectState((prevContent) => {
      return{
        ...prevContent,
        tasks: prevContent.tasks.filter((task) => task.id !== id )
      };
    })

  }

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

  function handleDeleteProject(){
    setProjectState((prevContent) => {
      return{
        ...prevContent,
        SelectedProjectID: undefined,
        projects: prevContent.projects.filter((project) => project.id !== prevContent.SelectedProjectID )
      };
    })
  }

  const selectedproject = ProjectsState.projects.find((project) => project.id === ProjectsState.SelectedProjectID)


  let content = <SelectedProject project={selectedproject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}  tasks={ProjectsState.tasks} />

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
      <ProjectsSidebar onSelectProject={handleSelectedProject} onStartProject={handleProjectStart}  projects={ProjectsState.projects} SelectedProjectID={ProjectsState.SelectedProjectID} />
      {content}
      
    </main>
  );
}

export default App;
