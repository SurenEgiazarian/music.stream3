function checkCookie(name) {
   return document.cookie.includes(`${name}=`);
}

export default checkCookie;