import React from 'react'
import {Container,Sub,Input,Left,Right,CheckBox,Button,Break,Row,Icons} from './LoginPageStyled'
import image from '../images/Illustration.png'
import facebook from '../images/Circle Button.png'
import google from '../images/google.png'
import ins from '../images/in.png'
import tweet from '../images/Tweet.png'


function LoginPage() {
  return (
    <Container>
        <Left>
      <Sub>
        <h1>Sign In</h1>
        <p>New user ? <a>create an account</a></p>
      </Sub>
      <Input>
      <input type='text' placeholder='User name or email'/>
      <input type='text' placeholder='Password'/>
      </Input>
        <CheckBox>
        <input type="checkbox" />
        <label>Keep me signed in</label>
        </CheckBox>
        <Button>
            <button>Sign in</button>
        </Button>
        <Row>
        <Break></Break>
        <p>Or Sign In With</p> 
        <Break></Break>
       </Row>
       <Icons>
        <img src={google} alt="" />
        <img src={facebook} alt="" />
        <img src={ins} alt="" />
        <img src={tweet} alt="" />

       </Icons>
      </Left>
      
      <Right>
        <img src={image} alt=""/>
      </Right>
    </Container>
  )
}

export default LoginPage
