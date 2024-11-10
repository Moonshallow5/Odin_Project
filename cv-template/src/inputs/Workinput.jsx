


function WorkInput({experience,handleExperienceChange,addWorkExperience}){
     

    return(

        <div className='education-sec'>


        <h3>Work Experience</h3>
      {experience.map((work, index) => (
        <div key={index} className="work-entry">
          <input
            type='text'
            placeholder="Job Title"
            value={work.title}
            name="title"
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={work.company}
            name="company"
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <input
            type='text'
            placeholder="Year"
            value={work.year}
            name="year"
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <textarea
            name="description"
            placeholder="Description (use bullet points)"
            value={work.description}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          </div>
      ))}
        
        
    
      <button onClick={addWorkExperience}>Add Another Work Experience</button>
    </div>

    )




}
export default WorkInput