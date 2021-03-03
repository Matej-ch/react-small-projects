import {NavLink} from "react-router-dom";

export default function FormSteps() {
    return (
       <div className="step-links">
           <NavLink to="/form/signup" className="p-2">Signup form </NavLink>
           <NavLink to="/form/social" className="p-2">Social form</NavLink>
           <NavLink to="/form/review" className="p-2">Review</NavLink>
       </div>
    )
}