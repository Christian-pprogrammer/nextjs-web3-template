import styled from 'styled-components';
const TableStyled = styled.table `

    border-collapse: separate !important;
    border-spacing: 0;
    border: 1px solid;
    text-align: left;
    border-radius: 7px;
    width: 40%;
    
    margin: auto;
    margin-top: 40px;

    th {
        padding: 10px 15px;
    }
    td {
        padding: 25px 15px;
    }
    tr td {
        border-top: 1px solid;
    }
    
`
export default TableStyled;