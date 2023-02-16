import styled from 'styled-components'

export const About = styled.div`
    background-color: #10140F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 200px 10%;

    p{
        width: 400px;
    }
    .container{
        display: flex;
        .image{
            height: 400px;
            width: 300px;
            background-color: white;
        }
        .info{
            margin-left: 50px;
            width: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 400px;
            h1{
                font-family: 'Hammersmith One';
                color: white;
                font-size: 30px;
            }
            .section{
                h3{
                    font-family: 'Hammersmith One';
                    color: white;
                    font-size: 25px;
                }
                p{
                    font-family: 'Heebo';
                    color: white;
                    font-size: 18px;
                }
            }
        }
    }
    .about{
        .section{
            text-indent: 20px;
        }
        width: 500px;
        font-family: 'Heebo';
        color: white;
        font-size: 18px;
    }
`