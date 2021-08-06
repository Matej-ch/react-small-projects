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
            <div className="py-6 px-8 mt-10 bg-gray-100 rounded shadow-xl">
                <form className="profile-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className={'text-xl mb-4'}>We want to find you</h2>

                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-800 font-bold">Twitter</label>
                        <input type="text" name="twitter" placeholder="Tell us your twitter"
                               className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                               ref={register({required:true})}
                               defaultValue={social.twitter}/>
                        <p className={'text-red-800'}>{errors.twitter && 'Twitter is required'}</p>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-bold">Facebook</label>
                        <input type="text" name="facebook" placeholder="Tell us your facebook"
                               ref={register({required:true})}
                               defaultValue={social.facebook}
                               className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"/>
                        <p className={'text-red-800'}>{errors.facebook && 'A valid facebook is required'}</p>
                    </div>


                    <button type={"submit"} value={'NEXT'}
                            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login
                    </button>
                </form>
            </div>

        </Animator>

    )
}