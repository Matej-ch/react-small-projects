import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useSignupForm} from "./SignupFormContext";
import Animator from "./Animator";

export default function SocialForm() {
    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const {social, setSocial} = useSignupForm();

    function onSubmit(data) {
        setSocial(data);
        history.push('/form/review');
    }

    return (
        <Animator>
            <form className="profile-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>We want to find you</h2>

                <input type="text" name="twitter" placeholder="Tell us your twitter" ref={register({required:true})} defaultValue={social.twitter}/>
                <p>{errors.twitter && 'Twitter is required'}</p>

                <input type="text" name="facebook" placeholder="Tell us your facebook" ref={register({required:true})} defaultValue={social.facebook}/>
                <p>{errors.facebook && 'A valid facebook is required'}</p>
                <input type="submit" value="NEXT"/>
            </form>
        </Animator>

    )
}