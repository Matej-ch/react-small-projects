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
            <div className="py-6 px-8 mt-10 bg-gray-100 rounded shadow-xl">
                <form className="profile-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className={'text-xl mb-4'}>Sign up</h2>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 font-bold">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Tell us your name"
                               ref={register({required:true})} defaultValue={profile.name}
                               className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"/>
                        <p className={'text-red-800'}>{errors.name && 'Name is required'}</p>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-bold">Email:</label>
                        <input type="text" name="email" id="email" placeholder="Tell us your email"
                               defaultValue={profile.email} ref={register({required:true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                               className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"/>
                        <p className={'text-red-800'}>{errors.email && 'A valid email is required'}</p>
                    </div>
                    <button type={"submit"} value={'NEXT'}
                        className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login
                    </button>
                </form>
            </div>
        </Animator>
    )
}