import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"

import { BackButton } from '../../components/BackButton';
import { DataListProps } from "../Dashboard";

import {
    Container,
    Header,
    Title,
    Wrapper,
    Align,
    Content,
    TitlePost,
    TextPost,
    DatePost
} from './styles'

interface Params {
    post: DataListProps
}

export function View() {    
    const route = useRoute();
    const { post } = route.params as Params

    interface NavigationProps {
        goBack: () => void
    } 

    const navigation = useNavigation<NavigationProps>();

    function handleBack(){
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <Wrapper>
                    <Align>
                        <BackButton onPress={handleBack}/>
                    </Align>
                <Title>Vizualizar Post</Title>
                </Wrapper>
            </Header>
            <Content>
                <TitlePost>{post.title}</TitlePost>
                <TextPost>{post.content}</TextPost>
                <DatePost>{post.date}</DatePost>
            </Content>
        </Container>
    )
}