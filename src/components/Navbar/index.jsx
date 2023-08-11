export const Navbar = () => {
    return (
        <header className="flex p-2.5 py-3.5 fixed w-full bg-white border-b">
            <div className="flex justify-between w-full">
                <a href="#">App name or logo</a>
                <div>
                    <a className="link-to-profile" href="/link-to-user-profile">
                        profile image
                    </a>
                </div>
            </div>
        </header>
    );
}