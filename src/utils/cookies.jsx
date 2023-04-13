export const cookies = {
    check(name) {
        return document.cookie.includes(`${name}=`);
    },

    set(name, value) {
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
            value
        )}; path=/`;
    },

    delete(name) {
        document.cookie = `${encodeURIComponent(name)}=''; max-age=0`;
    },
};
