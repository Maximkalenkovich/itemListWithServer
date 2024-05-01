import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/',
  headers: {
    'x-auth-skip': true,
  },
  withCredentials:true
})


type ResponseType = {
  items: Array<{
    author: {
      id: string;
      name: string;
    };
    id: string;
    userId: string;
    name: string;
    isPrivate: boolean;
    cover: string;
    created: string
    updated: string
    cardsCount: number;
  }>;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
  };
  maxCardsCount: number;
};


export const fetchData = async () => {
  try {
    const response = await instance.get<ResponseType>('v2/decks'); // Пример конечной точки вашего API
    return response.data; // Возвращает данные из ответа
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Пробрасывает ошибку для обработки в коде вызывающего метода
  }
};

