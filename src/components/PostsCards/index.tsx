import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../../hooks/auth";

import { 
    Container,
    CardHeader,
    UserWrapper,
    Photo,
    User,
    Icons,
    ButtonEdit,
    ButtonDelete,
    UserName,
    Title,
    IconEdit,
    IconDelete,
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
    buttonDelete: () => void;
    buttonView: () => void;
}

export function PostsCard({ 
    data,
    buttonDelete,
    buttonView
} : Props){
    const { user } = useAuth();

    return (
        <Container>
            <CardHeader>
                <UserWrapper>
                    <Photo source={{ uri: user.photo }}/>
                    <User>
                        {/* <UserName>{data.userName}</UserName> */}
                        <UserName>{ user.name }</UserName>
                        <Title>{data.title}</Title>
                    </User>
                </UserWrapper>
                <Icons>
                    <ButtonEdit onPress={() => console.log("Editar")}>
                        <IconEdit name="edit"/>
                    </ButtonEdit>
                    <ButtonDelete onPress={buttonDelete}>
                        <IconDelete name="delete"/>
                    </ButtonDelete>
                </Icons>
            </CardHeader>

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