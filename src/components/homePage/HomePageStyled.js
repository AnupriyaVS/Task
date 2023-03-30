import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    flex-direction: column;
`
export const Header = styled.div`
    display:flex;
    flex-direction: row;
    height:100px;
    padding-inline: 100px;
    @media (min-width:1000px) and (max-width:1430px){
      padding-inline:80px;
    }
    @media (min-width:700px) and (max-width:999px){
        padding-inline:80px;
    }
    @media (min-width:200px) and (max-width:699px){
        padding-inline:0;
    }
`
export const Left = styled.div`
    width:50%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
`
export const Right = styled.div`
    width:50%;
    /* background-color:yellow;  */
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    p{
        margin-inline: 30px;
        font-size: 20px;
    }
    img{
        display: none;
    }
    @media (min-width:200px) and (max-width:699px){
        p{
            display: none;
        }
        img{
            display: flex;
        }
    }
`
export const Div = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    /* column-gap: 20px; */
    row-gap: 20px;
    justify-items: center;
    margin-inline: 250px;
    padding-top: 100px;
    @media (min-width:1000px) and (max-width:1430px){
        margin-inline: 70px;
    }
    @media (min-width:700px) and (max-width:999px){
        margin-inline: 70px;
    }
    @media (min-width:200px) and (max-width:699px){
        grid-template-columns: auto;
        margin-inline:10px;
    }
`
export const Tag = styled.div`
  display:flex;
  flex-direction: row;
  width:400px;
    height:50px;
    /* background-color: gray;  */
    /* align-items: center; */
    padding: 20px;
    border :1px solid #3E3E3E ;
    @media (min-width:1000px) and (max-width:1430px){
       width:350px;
    }
    @media (min-width:700px) and (max-width:999px){
        width:250px;
    }
    @media (min-width:200px) and (max-width:699px){
        width:280px;
    }
`
export const Img = styled.div`
  /* width: 150px;
  height: 100px; */
  display:flex;
  align-items: center;
  img{
    width: 100px;
    height: 50px;
  }
  @media (min-width:700px) and (max-width:999px){
   img{
    width:50px;
   }
    }
    @media (min-width:200px) and (max-width:699px){
       img{
        width:50px;
       }
    }
`
export const Name = styled.div`
display: flex;
flex-direction: column;

text-align: justify;
padding-left: 50px;
p{
    color: gray;
}
span{
    color:#3E3E3E;
    font-size: 18px;
}
@media (min-width:700px) and (max-width:999px){
    padding-left: 30px;
    }
    @media (min-width:200px) and (max-width:699px){
        padding-left: 10px;
    }
`
export const Icons = styled.div`
 display: flex;
 justify-content: center;
 padding-top: 80px;
 img{
    margin-inline: 10px;
 }

`
export const Tags = styled.div`
 display: flex;
 flex-direction: column;
 text-align: center;
`