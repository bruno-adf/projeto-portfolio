import styled from 'styled-components'

export const Portfolio = styled.div`
    background-color: #090C08;
    padding: 200px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h1{
        font-family: 'Hammersmith One';
        font-size: 30px;
    }

    .selector{
        margin: 20px 0;
        button{
            width: 50px;
            height: 20px;
        }
    }

    .container{
        display: flex;
        color: white;
        .image{
            width: 300px;
            height: 400px;
            background-color: white;
        }
        .text{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-left: 50px;
            width: 300px;

            .title{
                h1{
                    font-size: 25px;
                    margin: 0;
                }
                p{
                    margin: 0;
                    font-family: 'Heebo';
                    font-size: 18px;
                }
            }

            .info{
                .section{
                    font-family: 'Heebo';
                    font-size: 18px;
                    margin-top: 20px;
                }
            }
        }
    }
`