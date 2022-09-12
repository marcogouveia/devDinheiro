import { ResumeItem } from "../ResumeItem"
import { Container } from "./styles"

import {
    FaRegArrowAltCircleUp, FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"


interface Values{
    income: any,
    expense: any,
    total: any
}

export const Resume = (props : Values) => {
    return (

        <Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={props.income} />
            <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} value={props.expense} />
            <ResumeItem title="Saldo" Icon={FaDollarSign} value={props.total} />
        </Container>

    )
}