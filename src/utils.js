import Cookies from "js-cookie";

export const getUserToken = () => Cookies.get("userToken");
export const setUserToken = (token) => Cookies.set("userToken", token);

export const getConfiguration = () => Cookies.get("configuration")
export const setConfiguration = (configuration) => Cookies.set("configuration", configuration)

export const getAccessToken = () => Cookies.get("accessToken");
export const setAccessToken = (access) => Cookies.set("accessToken", access);

export const getcustomerGuid = () => Cookies.get("customerGuid");
export const setcustomerGuid = (customerGuid) => Cookies.set("customerGuid", customerGuid);

export const getUserId = () => Cookies.get("userId");
export const setUserId = (userId) => Cookies.set("userId", userId)

export const availableLanguages = ['az', 'ru'];
export const baseURL = 'https://newecomapi.inloya.com/'
export const partnerId = 5

export const colors = {
    "primary-color": " #82b21e"
}