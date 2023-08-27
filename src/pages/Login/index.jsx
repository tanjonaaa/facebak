import { useState } from "react";
import EmailInput from "../SignUp/EmailInput";
import PasswordInput from "../SignUp/PasswordInput";
import { login } from "../../utils/fetcher/users";
import Cookies from "js-cookie";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email == "" || formData.password == "") {
            alert("Vous devez fournir un email et un mot de passe");
        } else {
            login(formData).then(res => {
                Cookies.set("identityToken", res.token);
                Cookies.set("loggedUser", Object.fromEntries(
                    Object.entries(res).filter(([key]) => key !== "token")
                ));
            })
        }
    }

    return (
        <section className="dark:bg-hex flex items-center justify-center h-screen">
            <img src="/illustrations/Connected world-amico.svg" className="w-1/3 ml-2" alt="coucou" />
            <div className="w-2/5 flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-hex rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-white dark:border-hex">
                    <div className="p-8 space-y-6">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-picton-blue">
                            Sign in
                        </h1>
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                            <EmailInput value={formData.email} onChange={handleChange} />
                            <PasswordInput
                                value={formData.password}
                                onChange={handleChange}
                                showPassword={showPassword}
                                handlePasswordVisibility={handlePasswordVisibility}
                            />
                            <div className="bg-picton-blue rounded-lg border-none">
                                <button
                                    type="submit"
                                    className="w-full bg-cerulean border-none rounded text-white font-bold py-2 px-4 border hover:scale-105"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}