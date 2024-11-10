import React from "react";

function EducationInput({education,handleInputChange,addEducation}){
    return(
        <div className='education-sec'>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-entry">
        <input 
          type='text'
          name='school'
          placeholder='School name'
          value={edu.school}
          onChange={(e) => handleInputChange(index, e)}
          />
           <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={edu.degree}
          onChange={(e) => handleInputChange(index, e)}
        />
        <input
          type="text"
          name="year"
          placeholder="Graduation Year"
          value={edu.year}
          onChange={(e) => handleInputChange(index, e)}
        />
      </div>
        ))}
        <button onClick={addEducation}> Add another Education</button>
    </div>

        
    )
}
export default EducationInput