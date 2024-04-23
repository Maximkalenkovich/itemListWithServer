interface Author {
  id: string;
  name: string;
}

export interface Item {
  author:Author
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string  // This could be Date if you're converting from string
  updated: string  // This could be Date if you're converting from string
  cardsCount: number;
}

interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

interface ResponseType {
  items: Item[];
  pagination: Pagination;
  maxCardsCount: number;
}



const initialState = {
  decks:[] as Item[], // todo: add type
  searchParams: {
    name: '',
  },
}


type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "SET-STATE":
    return {...state,decks:action.decks}
    default:
      return state
  }
}


export const setStateAC = (decks:Item[]) =>{
  return {
    type:'SET-STATE',decks
  } as const
}
type DecksActions = ReturnType<typeof setStateAC>
