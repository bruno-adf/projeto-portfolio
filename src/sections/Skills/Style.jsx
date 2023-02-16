import styled from 'styled-components'

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