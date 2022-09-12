import * as Com from './styles'
import {
    FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa"

interface GridItem {
    item: String,
    onDelete: (ID: number) => void
}

export const GridItem = (props: GridItem) => {
    return (
        <Com.Tr>
            <Com.Td></Com.Td>
            <Com.Td></Com.Td>
            <Com.Td></Com.Td>
        </Com.Tr>
    )
}