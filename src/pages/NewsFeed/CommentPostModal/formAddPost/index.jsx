import {FaPaperPlane, FaSmileBeam} from "react-icons/fa";
import {useState} from "react";

export default function FormAddPost({onAddComment}){
    const [isWriting,setWriting] = useState(false);
    const [content,setContent] = useState({content: ''});

    const handleSubmit = ev => {
        ev.preventDefault();
        if(onAddComment) onAddComment(content);
    }

    const handleChange = ev => {
        setContent(prev => ({...prev,content: ev.value}));
        if(ev.target.value.trim().length > 0){
            setWriting(true);
        }else {
            setWriting(false);
        }
    }

    return (
        <div className="flex gap-2 w-full bg-gray-300 p-3 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center
                    flex-shrink-0 rounded-full bg-gray-500">
                {/* Avatar image here */}
            </div>
            <form className="w-full flex items-center gap-2" onSubmit={handleSubmit}>
                <input type="text"
                       name="content"
                       className="resize-none bg-gray-300 w-full h-8 before:bg-none after:bg-none
                               focus:outline-0 placeholder-slate-500 font-semibold"
                       onChange={handleChange}
                       placeholder="Leave a comment"/>

                <button type="submit"
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {
                        isWriting
                            ? <FaPaperPlane className="w-6 h-6 text-blue-800"/>
                            : <FaSmileBeam className="w-6 h-6 text-yellow-500"/>
                    }
                </button>
            </form>
        </div>
    )
}