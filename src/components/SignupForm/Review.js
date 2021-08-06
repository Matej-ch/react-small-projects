import {useSignupForm} from "./SignupFormContext";
import Animator from "./Animator";

export default function Review() {

    const { profile,social } = useSignupForm();

    function handleSubmit(e) {
        e.preventDefault();
        alert('Form submitted');
    }

    return (
        <Animator>
            <div className="py-6 px-8 mt-10 bg-gray-100 rounded shadow-xl">
                <form className="profile-form" onSubmit={handleSubmit}>
                    <h2 className={'text-xl mb-4'}>Review</h2>

                    <p className={'flex justify-between'}><strong>Name:</strong> {profile.name }</p>
                    <p className={'flex justify-between'}><strong>Email:</strong> {profile.email }</p>
                    <p className={'flex justify-between'}><strong>Twitter:</strong> {social.twitter }</p>
                    <p className={'flex justify-between'}><strong>Facebook:</strong> {social.facebook }</p>

                    <button type={"submit"} value={'SUBMIT'}
                            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login
                    </button>
                </form>
            </div>
        </Animator>
    )
}