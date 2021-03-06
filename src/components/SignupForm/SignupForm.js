import {Route, Switch, useLocation} from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import Review from "./Review";
import FormSteps from "./FormSteps";
import {SignupFormProvider} from "./SignupFormContext";
import { AnimatePresence } from "framer-motion";

export default function SignupForm() {

    const location = useLocation();

    return (
        <SignupFormProvider>
            <div className="signup-form">
                <FormSteps />

                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/form/profile" component={ProfileForm} />
                        <Route path="/form/social" component={SocialForm} />
                        <Route path="/form/review" component={Review} />
                    </Switch>
                </AnimatePresence>


            </div>
        </SignupFormProvider>

    )
}