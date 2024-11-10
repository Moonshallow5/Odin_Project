
import { useState } from 'react'

import './App.css'
import EducationInput from './inputs/Eduinput'
import EducationPreview from './preview/Edupreview'
import WorkInput from './inputs/Workinput'
import WorkExperiencePreview from './preview/Workpreview'
import ProjectInput from './inputs/ProjectInput'
import ProjectPreview from './preview/ProjectPreview'

function App() {
  const [education,seteducation]=useState([{school:'',degree:'',year:''}])
  const [workExperience, setWorkExperience] = useState([{ title: '', company: '', year: '', description: '' }]);
  const [projectExperience, setProjectExperience] = useState([{ title: '', year: '', description: '' }]);

  const handleInputChange=(index,e) =>{
    const {name,value}=e.target
    const updatededucation=[...education]
    updatededucation[index][name]=value
    seteducation(updatededucation)


  }
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...workExperience];
    updatedExperience[index][name] = value;
    setWorkExperience(updatedExperience);
  };
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...projectExperience];
    updatedExperience[index][name] = value;
    setProjectExperience(updatedExperience);
  };

  const addEducation =() =>{
    seteducation([...education,{school:'',degree:'',year:''}])
  }
  const addWorkExperienceEntry = () => {
    setWorkExperience([...workExperience, { title: '', company: '', year: '', description: '' }]);
  };
  const addProjectExperienceEntry = () => {
    setWorkExperience([...projectExperience, { title: '', year: '', description: '' }]);
  };

  return (
    <div className='container'>
      <div className="input-section">
      <EducationInput education={education} handleInputChange={handleInputChange} addEducation={addEducation}/>
      <WorkInput experience={workExperience} handleExperienceChange={handleExperienceChange} addWorkExperience={addWorkExperienceEntry}/>
      <ProjectInput project={projectExperience} handleProject={handleProjectChange} addProject={addProjectExperienceEntry}/>
      
     
      
      </div>


    <div className="preview-section">
      <div className="a4-preview">
      <EducationPreview education={education} />
      <WorkExperiencePreview workExperience={workExperience}/>
      <ProjectPreview projectExperience={projectExperience} />

    
      
      </div>
      </div>

      
      </div>
      
  )
}


      



    
    
  


export default App
