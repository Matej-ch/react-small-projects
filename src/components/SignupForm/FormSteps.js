import {NavLink} from "react-router-dom";
import {useSignupForm} from "./SignupFormContext";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function FormSteps() {
    const {profile,social} = useSignupForm();

    const isProfileDone = !isEmpty(profile);
    const isSocialDone = !isEmpty(social);

    return (
       <div className="step-links">

           <NavLink to="/form/profile" className="p-2">
               {isProfileDone ? 'Y' : 'N' } Signup form
           </NavLink>

           {isProfileDone ? (<NavLink to="/form/social" className="p-2">
               {isSocialDone ? 'Y' : 'N' } Social form
           </NavLink>) : (<a> Social form </a>) }


           { isProfileDone && isSocialDone ? (
               <NavLink to="/form/review" className="p-2">Review</NavLink>
           ) : (<a>Review</a>) }

       </div>
    )
}