export const loggedInUser = () => {
    const role = localStorage.getItem('role')
    const name = localStorage.getItem('name')
    if (role && name) {
        return { role: role, name: name }
    }
    else {
        return false;
    }
}

export function isLogin() {
    if (!loggedInUser()) window.location = '/log_in';
}

export default {
    isLogin,
    loggedInUser
};