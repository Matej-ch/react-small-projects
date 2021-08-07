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
       <div className="step-links text-xl font-bold">

           <NavLink to="/form/profile" className="p-2">
               {isProfileDone ? '✔' : '❕' } Signup form
           </NavLink>

           {isProfileDone ? (<NavLink to="/form/social" className="p-2">
               {isSocialDone ? '✔' : '❕' } Social form
           </NavLink>) : (<button className={'p-2'}> Social form </button>) }


           { isProfileDone && isSocialDone ? (
               <NavLink to="/form/review" className="p-2">Review</NavLink>
           ) : (<button className={'p-2'}>Review</button>) }

       </div>
    )
}