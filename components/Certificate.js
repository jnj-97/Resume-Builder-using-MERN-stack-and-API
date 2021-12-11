import { Link } from '@material-ui/core'
import React,{useState} from 'react'
import "./Certificate.css"
function Certificate({ certificate}) {
    const [url,setUrl]=useState()

    return (
            <div className="certificate">
                <div className="certificate__first">
                    <h3>Certificate</h3>
                </div>
                <div className="certificate__second">
                    {certificate?.map((value, index) => (
                    <div key={index} className="certificate__details"> 
                        <a style={{marginLeft:0,color:"blue"}} href={value.certificate_url} target="_blank">{value.certificate_name}-</a>
                        {value.certificate_description && <span>{value.certificate_description}</span>}
                    </div>
                 ))}
                </div>
            </div>
       
    )
}

export default Certificate
