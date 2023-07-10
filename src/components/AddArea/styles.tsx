import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    input {
        outline: none;
        border: 0;
        background: transparent;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }

    .image {
        margin-right: 5px;
        cursor: pointer;
    }
`;