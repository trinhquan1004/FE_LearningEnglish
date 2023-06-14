import api from './api';

const getLessons = async () => {
  try {
    const response = await api({
      method: 'GET',
      url: '/lessons',
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getLessons };
