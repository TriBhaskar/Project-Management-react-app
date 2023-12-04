import AddNewProject from "./components/AddNewProject";
import ProjectTask from "./components/ProjectTask";
import SideBarComponent from "./components/SideBarComponent";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBarComponent />
      <NoProjectSelected />
    </main>
  );
}

export default App;
