import styled from 'styled-components'

export const Header = styled.div`
    width: 97%;

    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, #090C08 100%);

    padding: 10px 25px;

    .logo{
        font-family: "Hammersmith One";
    }

    .navigation{
        min-width: 250px;
        width: 30%;
        display: flex;
        justify-content: space-between;

        p{
            font-family: "Heebo";
            font-size: 12px;
            transition: color 0.2s;
            :hover{
                color: #00A3FF;
                cursor: pointer;
            }
        }
    }
`

