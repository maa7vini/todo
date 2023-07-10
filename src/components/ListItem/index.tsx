import * as C from './styles'

import { useState } from 'react'
import { Item } from '../../types/Item'

type Props = {
    item: Item
}

export const ListItem = ( {item}: Props) => {
    return (
        <C.Container>
            <input type="checkbox" />

            <label> {item.task} </label>
        </C.Container>
    )
}