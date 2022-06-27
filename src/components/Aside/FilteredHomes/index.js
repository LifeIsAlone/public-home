
import React, { useEffect } from 'react'
import { useHomesState } from '../../../context/HomeContext'
import Items from './Items';

export default function FilteredHomes() {
  const state = useHomesState();
  return (
    <ul>
      {state.filteredHomes.map(item => <Items item={item} />)}
    </ul>
  )
}
