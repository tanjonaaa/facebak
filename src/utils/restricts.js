import Cookies from "js-cookie";

const CookiesArePresent  = () => {
    const userLogged = Cookies.get("loggedUser");
    const token = Cookies.get("identityToken");

    return userLogged && token;
}

export const isAuthenticated = CookiesArePresent();