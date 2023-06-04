import api from './api';

const login = async (email, password) => {
  try {
    const loginInfo = await api({
      method: 'POST',
      url: '/auths/login',
      data: { email, password },
    });
    return loginInfo;
  } catch (error) {
    return null;
  }
};

const register = async (name, email, password) => {
  try {
    const registerInfor = await api({
      method: 'POST',
      url: '/auths/register',
      data: { name, email, password },
    });
    return registerInfor;
  } catch (error) {
    return null;
  }
};

export { login, register };
