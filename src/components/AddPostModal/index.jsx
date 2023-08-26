import InputForm from "../InputForm";
import {useState} from "react";
import {createPostOrUpdate} from "../../utils/fetcher/posts";

const AddPostModal = ({onAddPost,onCancel,userId,onAddedPost}) => {
    const [form,setForm] = useState({
        userId,
        content: '',
        title: ''
    });

    const handleSubmit = ev => {
        ev.preventDefault();
        createPostOrUpdate(form)
        .then(() => {
            if(onAddedPost) onAddedPost(form);
        })
        .catch(e => {
            console.log(e);
        })
    }

    const handleChange = ev => {
        setForm(prev => (
            {...prev,[ev.target.name]: ev.target.value}
        ));
    }

    return (
        <div className="fixed inset-0 items-center justify-center z-50">
            <span className="absolute bg-gray-800 opacity-75 w-full h-full flex"></span>

            <div className="w-full h-full flex items-center justify-center">
                <div className="p-3 bg-white flex rounded-lg items-center py-3">

                    <div className="flex items-center gap-2 w-full">
                        <img src="/illustrations/Online%20world-cuate.svg"
                             className="relative h-96"
                             alt="post"/>

                        <form className="relative flex flex-col gap-2 w-96"
                              onSubmit={handleSubmit}>
                            <h2 className="text-blue-700 text-2xl font-semibold">What's news Username !</h2>
                            <InputForm type="text"
                                       onChange={handleChange}
                                       label="Title"
                                       name="title"/>
                            <InputForm type="text"
                                       name="content"
                                       onChange={handleChange}
                                       label="content"/>

                            <div className="w-full flex items-center gap-2">
                                <button type="submit"
                                        className="p-2 rounded-md bg-orange-600 text-white hover:bg-orange-500
                                        text-lg font-semibold
                                        "
                                        onClick={onAddPost}>
                                    Add post
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

export default AddPostModal;