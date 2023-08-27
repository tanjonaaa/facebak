import InputForm from "../../../components/InputForm";
import ProfileUpload from "./profileUpload";
import {useContext, useState} from "react";
import {updateUser} from "../../../utils/fetcher/users";
import {clientContext} from "../../../utils/context";

const ModalEditProfile = ({onCancel,onDone}) => {
    const {userData} = useContext(clientContext);
    const [form,setForm] = useState({
        email: (userData && userData.email) ? userData.email : ''
    });

    const handleSubmit = ev => {
        ev.preventDefault();
        if(userData && userData.email) updateUser(userData.email,form)
            .then(() => {
                if (onDone) onDone(true);
            })
            .catch(() => {
                console.log("error on updating profile");
            })
    }

    const handleChange = ev => {
        setForm(prev => ({...prev,[ev.target.name]: ev.target.value}));
    }
    const handleChangeImage = photo => {
        setForm(prev => ({...prev,...photo}));
    }

    return (
        <div className="fixed inset-0 items-center justify-center z-50">
            <span className="absolute bg-gray-800 opacity-75 w-full h-full flex"></span>

            <div className="w-full h-full flex items-center justify-center">
                <div className="p-3 bg-white flex rounded-lg items-center py-3">

                    <div className="flex items-center gap-2 w-full">
                        <img src="/illustrations/Smiley%20face-cuate.svg"
                             className="relative h-96"
                             alt="post"/>

                        <form className="relative flex flex-col gap-2 w-96"
                              onSubmit={handleSubmit}>
                            <h2 className="text-blue-700 text-2xl font-semibold">Modify your profile</h2>
                            <ProfileUpload onChange={handleChangeImage}/>
                            <InputForm type="text"
                                       onChange={handleChange}
                                       label="Username"
                                       name="username"/>
                            <InputForm type="text"
                                       onChange={handleChange}
                                       label="Bio"
                                       name="bio"/>
                            <InputForm type="password"
                                       name="password"
                                       onChange={handleChange}
                                       label="Password"/>
                            <div className="w-full flex items-center gap-2">
                                <button type="submit"
                                        className="p-2 rounded-md bg-orange-600 text-white hover:bg-orange-500
                                        text-lg font-semibold
                                        ">
                                    Finish
                                </button>
                                <button type="button"
                                        className="p-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-500
                                        text-lg font-semibold
                                        "
                                        onClick={onCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditProfile;