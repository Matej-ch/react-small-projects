import {Route, Switch} from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import Review from "./Review";
import FormSteps from "./FormSteps";

export default function SignupForm() {
    return (
        <div className="signup-form">
            <FormSteps />

            <Switch>
                <Route path="/form/signup" component={ProfileForm} />
                <Route path="/form/social" component={SocialForm} />
                <Route path="/form/review" component={Review} />
            </Switch>

        </div>
    )
}