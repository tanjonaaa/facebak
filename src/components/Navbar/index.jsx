import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="flex p-2.5 py-3.5 fixed w-full bg-white border-b z-50">
            <div className="flex justify-between w-full">
                <a href="/">Facebak</a>
                <Link to="/sign-up">Inscription</Link>
                <div>
                    <a className="link-to-profile" href="/link-to-user-profile">
                        profile image
                    </a>
                </div>
            </div>
        </header>
    );
}