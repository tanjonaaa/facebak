import Cookies from "js-cookie";

const CookiesArePresent  = () => {
    return typeof Cookies.get("loggedUser") === "string"
    && typeof Cookies.get("identityToken") === "string"
}

export const isAuthenticated = CookiesArePresent();