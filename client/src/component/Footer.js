import { Facebook, Instagram, Twitter,Room,Phone,MailOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fff8f8"})}

`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}

`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
  margin:0;
  padding:0;  
  list-style:none;
  display:flex;
  flex-wrap:wrap;

`;
const ListItem = styled.li`
  width:50% ;
  margin-bottom:10px;
`;

const SocialContainer = styled.div`
  display: flex;
  &:hover {
    transition: all 1.5s ease;
  }
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width:50%
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AHMED</Logo>
        <Desc>here is my favorite web site </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem> 
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room  styled={{marginRight:"20px"}}/>Teboulba 5080 , Rue 23 Janvier
        </ContactItem>
        <ContactItem>
          <Phone styled={{marginRight:"20px"}}/>+216 937 32 94 / +216 546 62 21
        </ContactItem>
        <ContactItem>
             <MailOutline styled={{marginRight:"20px"}}/>Contact@ahmedbk5080@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
