import api from './api';
import { getToken } from '../utils/localStorage';

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

const deleteCard = async (cardId) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'DELETE',
      url: `/cards/${cardId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getCards, deleteCard };
