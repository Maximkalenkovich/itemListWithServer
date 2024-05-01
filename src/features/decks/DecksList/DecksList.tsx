import s from './DecksList.module.css'
import {useEffect} from "react";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";

import {fetchThunkTC} from "../decks-thunks.ts";

export const DecksList = () => {
  const deck = useAppSelector(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchThunkTC())
  }, [])

  return <ul className={s.list}>
    {
      deck.map((deck) => <li key={deck.id}><DeckItem  deck={deck} /></li>)
    }
  </ul>
}
