import Cookies from "js-cookie";

const CookiesArePresent  = () => {
    const userLogged = Cookies.get("loggedUser");
    const token = Cookies.get("identityToken");

    return typeof userLogged === "string"
    && typeof token === "string"
    && token.length > 0
    && userLogged.length > 0
}

export const isAuthenticated = CookiesArePresent();