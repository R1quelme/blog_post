import React, { useContext } from "react";
import { Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
// import LogoPng from '../../assets/post1.s';

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
    Container,
    Header,
    TitleWrapper,

    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';

export function SignIn(){
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possível conectar a conta Google')
        }
    }

    async function handleSignInWithApple(){
        try {
            await signInWithApple();
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possível conectar a conta Google')
        }
    }

    return(
        <Container>
            <Header>
                <TitleWrapper>
                    {/* <LogoPng
                        width={RFValue(120)}
                        height={RFValue(68)}
                    /> */}

                    <Title>
                        Compartilhe ideias {'\n'}
                        de uma maneira {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton 
                        title="Entrar com o Google"
                        svg={GoogleSvg}
                        onPress = {handleSignInWithGoogle}
                    />

                    {
                        Platform.OS === 'ios' &&
                        <SignInSocialButton 
                            title="Entrar com o Apple"
                            svg={AppleSvg}
                            onPress = {handleSignInWithApple}
                            //Só é possivel fazer o teste do login social da Apple 
                            //com um dispositivo físico, e apenas lhe é retornado 
                            //os dados na primeira vez
                        />
                    }
                </FooterWrapper>
            </Footer>
        </Container> 
    );
}