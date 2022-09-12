import styled from "styled-components";

export const Table = styled.table`

    width: 90%;
    max-width: 1440px;

    margin: 40px auto;

    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 5px;

`

export const Thead = styled.thead`
`
export const Tbody = styled.tbody`
`

export const Tr = styled.tr``

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;

    text-align: ${(props: any) => (props.align ? "center" : "start")};
    width: ${(props: { width: Number }) => (props.width ? props.width + "%" : "auto")};
`