import {
    Container,
    Title,
    Button,
    Image,
    LeftContainer,
    RightContainer,
    SubTitle,
    ButtonBox,
  } from "./styles";

  import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <div>
            <Container>
                <LeftContainer>
                    <Title>O mapa de sua cidade</Title>
                    <SubTitle>Encontre no comercio local tudo que voce precisa!</SubTitle>
                    <Link to='/new'>
                        <Button>
                            <ButtonBox>{'>'}</ButtonBox>
                            Cadastre um ponto comercial
                        </Button>
                    </Link>
                </LeftContainer>

                <RightContainer>
                    <Image/>
                </RightContainer>
            </Container>
        </div>
    )
}