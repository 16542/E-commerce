import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  heigth: 60px;
  ${mobile({height:50})}
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  ${mobile({padding:"10px 0px"})}



`;
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`;
const Langage = styled.span`
  font-size: 14px;
  ${mobile({display:"none"})}

`;
const SearchContainer = styled.div`
  border:0.5px solid lightgray;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding;2px;

`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}

`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}

`;
const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})};
  text-decoration:none

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"25px"})}

`;
const Navbar = () => {
 const quantity = useSelector(state => state.cartReducer.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langage>EN</Langage>
          <SearchContainer>
            <Input  placeholder="Search"/>
            <Search  style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ahmed SHOP.</Logo>
        </Center>
        <Right>
          <Link to="/register">
          
          <MenuItems>REGISTER</MenuItems>
          </Link>
          <MenuItems>SIG IN</MenuItems>
          <Link to="/cart">

          <MenuItems>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItems>
          </Link>         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
