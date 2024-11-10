function ProjectInput({project,handleProject,addProject}){



    return(
        <div className="education-sec">
            <h3>Projects</h3>
            {project.map((work, index) => (
        <div key={index} className="work-entry">
          <input
            type='text'
            placeholder="Project name"
            value={work.title}
            name="title"
            onChange={(e) => handleProject(index, e)}
          />
          
          <input
            type='text'
            placeholder="Year"
            value={work.year}
            name="year"
            onChange={(e) => handleProject(index, e)}
          />
          <textarea
            name="description"
            placeholder="Description (use bullet points)"
            value={work.description}
            onChange={(e) => handleProject(index, e)}
          />
          </div>
        
        ))}

<button onClick={addProject}>Add Another Project</button>
</div>





    )
}

export default  ProjectInput