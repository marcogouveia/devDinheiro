import { IconType } from "react-icons/lib"
import * as Com from "./styles"

interface ResumeProps {
    title: String,
    Icon: IconType,
    value: String
}

export const ResumeItem = (props: ResumeProps) => {

    let valor = Number(props.value);
    valor.toFixed(2);
    

    return (
        <Com.Container>
            <Com.Header>
                <Com.HeaderTitle>
                    {props.title}
                </Com.HeaderTitle>
                <props.Icon />

            </Com.Header>
            <Com.Content>
                <Com.ContentMoeda>
                    R$
                </Com.ContentMoeda>
                <Com.ContentTotal>
                    {valor}
                </Com.ContentTotal>
            </Com.Content>

        </Com.Container>

    )

}