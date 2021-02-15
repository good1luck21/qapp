class AuthUser{

  isLoggedIn = () => this.get('token') === 'true';

  get = key => this.getLocalStorage(key);

  set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);
    const token = JSON.parse(ret)
    if (token) {
      return token;
    }
    return null;
  };

}

export default new AuthUser();