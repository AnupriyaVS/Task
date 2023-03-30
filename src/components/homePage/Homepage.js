import React, { useEffect, useState } from 'react'
import {Container,Header,Left,Right,Div,Tag,Img,Name,Icons,Tags} from './HomePageStyled'
import facebook from '../images/Circle Button.png'
import google from '../images/google.png'
import ins from '../images/in.png'
import tweet from '../images/Tweet.png'
import icon from '../images/Icon.png'
function Homepage() {

  const [countries,setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(' https://restcountries.com/v2/all?fields=name,region,flag');
      const json = await response.json();
      setCountries(json);
    }

    fetchData();
  }, []);

  return (
    <Container>
     <Header>
      <Left>
         <h2>Countries</h2>
      </Left>
      <Right>
          <p>All</p>
          <p>Asia</p>
          <p>Europe</p>
          <img src={icon} alt=''/>
      </Right>
     </Header>
     <Div>
      {countries.map((val)=>{
        return(
        <Tag key={val.name}>
        <Img>
        <img src={val.flag} alt=""/>
        </Img>
        <Name>
          <span>{val.name}</span>
          <p>{val.region}</p>
        </Name>
      </Tag>
      )})}
      
     </Div>
     <Icons>
        <img src={google} alt="" />
        <img src={facebook} alt="" />
        <img src={ins} alt="" />
        <img src={tweet} alt="" />

       </Icons>
       <Tags>
         <p>Example@email.com</p>
         <p>Copyright 2020 name.All rights reserved</p>
       </Tags>
    </Container>
  )
}

export default Homepage
