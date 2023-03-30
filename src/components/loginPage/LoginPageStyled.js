import styled from 'styled-components'


export const Container = styled.div`
    display :flex;
    flex-direction: row;
    
`
export const Left = styled.div`
    width:40%;
    display :flex;
    flex-direction: column;
    padding-top: 150px;
    padding-left:200px;
    @media (min-width:700px) and (max-width:799px){
        padding-top: 130px;
    padding-left:60px;
    }
    @media (min-width:200px) and (max-width:699px){
        padding-left: 0;
        padding-inline: 50px;
        width: 100%;
    }
`
export const Right = styled.div`
    padding-top: 160px;
    img{
        width:500px;
    }
    @media (min-width:1050px) and (max-width:1450px){
        img{
            width:350px;
        }
    }
    @media (min-width:800px) and (max-width:1049px){
        img{
            width:300px;
        }
    }
    @media (min-width:700px) and (max-width:799px){
        img{
            width:250px;
            margin-left: 50px;
        }
    }
    @media (min-width:200px) and (max-width:699px){
        display: none;
    }
`
export const Sub = styled.div`
    h1{
        font-family: 100;
        color:#3D3D3D;
    }
    p{
        font-size: 20px;
        a{
            color:#587FFF;
        }
    }
`
export const Input = styled.div`
    display:flex;
    flex-direction: column;
    input{
        width:280px;
        height: 35px;
        margin-top: 20px;
        border: 1px solid #8A8A8A;
        outline: none;
        padding-left: 20px;
    }
`
export const CheckBox = styled.div`
    
    input{
        width: 20px;
        height: 20px;
        margin-top: 30px;
    }
    label{
        color:#3D3D3D;
        padding-left:20px;
    }
`
export const Button = styled.div`
    margin-top: 20px;
    button{
        width:300px;
        height: 40px;
        background-color:#3D3D3D ;
        color:white;
        font-size: 18px;
        cursor: pointer;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
   
    p{
        color:#3D3D3D ;
    }
    @media (min-width:700px) and (max-width:799px){
        justify-content: center;
    }
`
export const Break = styled.div`
     margin-top: 30px;
    width: 100px;
    display:flex;
    flex-direction: column;
    height: 1px;
    background: lightgrey;
    p{
        position: absolute;
    }
    @media (min-width:600px) and (max-width:799px){
        width: 60px;
    }
`
export const Icons = styled.div`
margin-top: 30px;
    img{
        margin-left: 20px;
    }
`