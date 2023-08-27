import {BiCamera} from "react-icons/bi";
import useImageChecker from "../../../../utils/hooks/useImageChecker";
import {useContext, useState} from "react";
import {clientContext} from "../../../../utils/context";
import {FaUser} from "react-icons/fa6";

const ProfileUpload = ({onChange}) => {
    const {userData} = useContext(clientContext);
    const defaultProfile = useImageChecker(
        ((userData && userData.photo) ? userData.photo : ''),
        <FaUser className="w-8 h-8"/>,
        {
            className: 'w-full h-full object-cover rounded-full'
        }
    );
    const [photo,setPhoto] = useState(userData.photo ? userData.photo : '');

    const handleChange = ev => {
        if(ev.target.files){
            const fileReader = new FileReader();
            fileReader.onload = e => {
                setPhoto(fileReader.result);
                if(onChange) onChange( {[ev.target.name]: fileReader.result});
            }
            fileReader.readAsDataURL(ev.target.files[0]);
        }
    }

    return (
        <div>
            <div className="w-36 h-36 bg-zinc-400 rounded-full">
                {
                    (userData && userData.photo && userData.photo === photo)
                        ? defaultProfile
                        : <img src={photo}
                               alt="profile"
                               className="w-full h-full object-cover rounded-full"/>

                }
                <label htmlFor="profile"
                       className="absolute bottom-2.5 right-2.5 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200">
                    <BiCamera className="w-5 h-5"/>
                </label>
            </div>
            <input type="file"
                   id="profile"
                   name="photo"
                   accept="image/*"
                   onChange={handleChange}
                   hidden/>
        </div>
    )
}


export default ProfileUpload;