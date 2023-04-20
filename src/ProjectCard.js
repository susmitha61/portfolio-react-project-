import {Col} from "react-bootstrap";
const ProjectCard = ({title,description,imgUrl}) =>{
    return(
     <Col sm={6} md={4}>
       

        <div className="proj-imgbx" style={{display:"inline"}}>
            <img src={imgUrl} style={{height:'250px'},{width:'250px'}}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                </div>
                </div>
           
            </Col>
        
                )
}
export default ProjectCard;