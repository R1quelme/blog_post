import React from "react";
import { HeaderPost } from "../HeaderPost";
import { DataListProps, EditTitleArgs } from '../../screens/Dashboard';

import { 
    Container,
    Content,
    ButtonView,
    Footer,
    IconView,
    Date
} from "./styles";

export interface PostCardProps {
    title: string;
    content: string;
    date: string;
}

interface Props {
    data: DataListProps,
    buttonEdit: ({ titleId, postNewTitle }: EditTitleArgs) => void,
    buttonDelete: () => void;
    buttonView: () => void;
    admin: boolean
}

export function PostsCard({ 
    data,
    buttonEdit,
    buttonDelete,
    buttonView,
    admin
} : Props){

    return (
        <Container>
            <HeaderPost data={data} buttonDelete={buttonDelete} buttonEdit={buttonEdit} admin={admin}/>
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