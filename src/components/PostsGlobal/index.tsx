import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../../hooks/auth";

import { 
    Container,
    Title,
    Content,
    ButtonView,
    Footer,
    IconView,
    Date
} from "./styles";

export interface PostCardProps {
    // Photo: object;
    // userName: string;
    title: string;
    content: string;
    date: string;
}

interface Props {
    data: PostCardProps,
    buttonView: () => void;
}

export function PostsGlobal({ 
    data,
    buttonView
} : Props){
    const { user } = useAuth();

    return (
        <Container>
            <Title>{data.title}</Title>
            <Content>{data.content}</Content>

            <Footer>
                <ButtonView onPress={buttonView}>
                    <IconView name="eyeo"/>
                </ButtonView>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}