
import React from 'react'
import "./Projects.css"
import moment from 'moment'
function Projects({ project}) {
    return (
        <div className="projects">
            <div className="projects__first">
                <h3>projects</h3>
            </div>
            <div className="projects__second">
                <table> 
                    <tbody>
                        {project?.map((value, index) => (
                            <tr className="projects__row" key={index}>
                                <td className="projects__row__details">
                                  
                                    <p className="projects__courseLink">
                                        <a style={{marginLeft:0}} href={value.project_url} target="_blank">{value.project_name}</a>
                                    </p>
                                    <p style={{textAlign:"justify"}}>{value.project_description}</p>
                                </td>
                                <td style={{marginTop:20,fontWeight:"bold",fontSize:15}} className="projects__row__year">
                                    
                                    <span>  {moment(value.project_start_date).format("MMM Do YY")}   -   {moment(value.project_finish_date).format("MMM Do YY")} </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Projects
