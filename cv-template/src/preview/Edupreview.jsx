import React from "react";

function EducationPreview({education}){
    return(

        <div className="preview-section">
        <div className="a4-preview">
          
          <h3>Education</h3>
          <div className='lines'>
          <p>------------------------------------------------------------------</p>
          </div>
          {education.map((edu, index) => (
            <div className='education-details' key={index}>
            <div className='edu-left'>
          <p> {edu.school}</p>
    

          <p> <em>{edu.degree}</em></p>
          </div>
            <div className='edu-right'>
          <p>{edu.year}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    )
}
export default EducationPreview