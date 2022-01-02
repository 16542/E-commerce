import styled from "styled-components"

const Container = styled.div`
    background-color:teal;
    font-size:14px;
    font-weight:500;
    height:30px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    

`




const Announcement = () => {
    return (
        <Container>
            Super Deal Free Shiping on 50$
        </Container>
    )
}

export default Announcement
