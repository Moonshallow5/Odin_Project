function ProjectPreview({projectExperience}){


    return (

        <div className="preview-section">
        <div className="a4-preview">
          <h3>Projects</h3>
          <div className="lines">
            <p>------------------------------------------------------------------</p>
          </div>
      
          {projectExperience.map((work, index) => (
            <div key={index}>
              <div className="education-details">
                <div className="edu-left">
                  <p>{work.title}</p>
                
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

export default ProjectPreview