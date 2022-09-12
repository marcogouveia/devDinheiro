import { GridItem } from '../GridItem';
import * as Com from './styles';

interface GridProps {
    itens: any,
    setItens: (Array: Array<string>) => void
}

export const Grid = (props: GridProps) => {

    const onDelete = (ID: number) => {
        const newArray = props.itens.filter((transaction: any) => transaction.id !== ID);
        props.setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
      };
    
    return (
        <Com.Table>
            <Com.Thead>
                <Com.Tr>
                    <Com.Th width={40}>Descrição</Com.Th>
                    <Com.Th width={40}>Valor</Com.Th>
                    <Com.Th width={10} align="center">Tipo</Com.Th>
                    <Com.Th width={10} >Tipo</Com.Th>
                </Com.Tr>
            </Com.Thead>
            <Com.Tbody>
                {
                    props.itens.map((item: any, index: number) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))
                }
            </Com.Tbody>
        </Com.Table>
    )
}