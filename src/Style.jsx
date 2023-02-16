import styled from 'styled-components'

export const Head = styled.div`
    font-family: 'Hammersmith One';
    text-align: left;
    background-color: white;

    padding: 275px 0 275px 10%;


    .title-a{
        font-size: 30px;
        margin-left: 5px;
    }
    .title-b{
        font-size: 100px;
    }
`
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
export const Skills = styled.div`
    background-color: #090C08;
    padding: 200px 10%;

    h1{
        font-family: 'Hammersmith One';
        color: white;
        font-size: 30px;
        text-align: center;
    }

    .soft-skills-container{
        justify-items: center;
        justify-items: center;
        margin: 25px 0 100px;
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        .skill{
            width: 200px;
            height: 200px;
            background-color: white;
            color: #090C08;
            
            text-align: left;
            padding: 15px;

            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
            font-family: 'Hammersmith One';
            font-size: 20px;
            margin: 15px 0;
            }
            p{
            font-family: 'Heebo';
            font-size: 15px;
            color: #090C08;
            }
        }
    }

    .line{
        margin: 15px;
        width: 100%;
        height: 2px;
        background-color: #00A3FF;
    }

    .hard-skills-container{
        display: flex;
        justify-content: center;
        > * {
            margin: 0 10px;
        }
/* 
        .skill{
            width: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                font-family: 'Hammersmith One';
                font-size: 20px;
                margin: 15px 0;
                color: white;
            }
        } */
    }
`
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