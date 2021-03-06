import { useForm } from 'react-hook-form'
import {useHistory } from 'react-router-dom'
import {useSignupForm} from "./SignupFormContext";
import Animator from "./Animator";

export default function ProfileForm() {

    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const {profile, setProfile} = useSignupForm();

    function onSubmit(data) {
        setProfile(data);
        history.push('/form/social');
    }

    return (
        <Animator>
            <form className="profile-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>Sign up</h2>

                <input type="text" name="name" placeholder="Tell us your name" ref={register({required:true})} defaultValue={profile.name}/>
                <p>{errors.name && 'Name is required'}</p>

                <input type="email" name="email" placeholder="Tell us your email" defaultValue={profile.email} ref={register({required:true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                <p>{errors.email && 'A valid email is required'}</p>
                <input type="submit" value="NEXT"/>
            </form>
        </Animator>
    )
}