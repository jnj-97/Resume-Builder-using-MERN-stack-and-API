import React from 'react'
import "./Skills.css"
function Skills({ skills }) {
    return (
        <div className="skills">
            <div className="skills__first">
                <h3>skills</h3>
            </div>
            <div className="skills__second">
                <table>
                    <tbody>
                        {skills?.map((value, index) => (      
                            <tr className="skills__row" key={index}>
                                <td id ="row1" className="skills__row__programming">
                                    <span>{value.skill_category}</span>
                                </td>
                                <td id ="row2" className="skills__row__details">
                                    <span >{value.skill_name} </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Skills
