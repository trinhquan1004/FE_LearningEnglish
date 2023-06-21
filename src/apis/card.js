import api from './api';

const getCards = async (lessonId) => {
  try {
    const response = await api({
      method: 'GET',
      url: `/cards?lessonId=${lessonId}`,
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getCards };
