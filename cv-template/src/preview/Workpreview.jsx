function WorkExperiencePreview({workExperience}){
    

    return (

        <div className="preview-section">
        <div className="a4-preview">
          <h3>Work-Experience</h3>
          <div className="lines">
            <p>------------------------------------------------------------------</p>
          </div>
      
          {workExperience.map((work, index) => (
            <div key={index}>
              <div className="education-details">
                <div className="edu-left">
                  <p>{work.title}</p>
                  <p><em>{work.company}</em></p>
                </div>
                <div className="edu-right">
                  <p><strong>Year:</strong> {work.year}</p>
                </div>
              </div>
              
              {/* Description section outside education-details */}
              <div className="description-container">
               
                <ul>
                  {work.description && work.description.split('\n').map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
        
    )
}
export default WorkExperiencePreview