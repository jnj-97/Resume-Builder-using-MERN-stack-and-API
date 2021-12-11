import React from 'react'
import "./Educational.css"

function Educational({ educational }) {
    return (
        <div className="educational">
            <div className="educational__first">
                <h3>educational details</h3>
            </div>
            <div class="educational__second">
                <table>
                    <tbody>
                        {educational?.map((value,index) => (
                           
                                <tr className="educational__row" key={index}>

                                    <td className="educational__row__details">
                                    <p id="education__title"> <span className="educational__course">
                                        {value.standard === "Graduation"  ? <span>
                                            {value.graduation_course} {" "} ({value.graduation_stream}) {" "}
                                            </span> :
                                            value.standard
                                            }
                                        </span> {" "}| <strong style={{fontStyle:"italic"}}> {value.schoolCollege}</strong> ({value.year_of_completion}){value.boardUniversity && <p>
                                        {value.boardUniversity}
                                                </p> }
                                    </p>
                                    <p className="educational__schoolCollege">   
                                        {value.educational_city &&
                                            <span>
                                                {value.educational_city} {", "}
                                        </span> 
                                        
                                        }
                                   {value.school_college_state} <br />
                                   {value.marks_obtained} {" "} {value.marks_type === "Percentage" ? "%" : "CGPA"} 
                                    </p>
                                    

                                    </td>
                                    

                                </tr>                    
                        ))}
                    </tbody>

                </table>
        </div>
        </div>
    )
}

export default Educational
