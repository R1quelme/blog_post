import React from "react";

import {
    Container,
    Ids,
    UserId,
    Id,
    Wrapper,
    Title,
    Body
} from './styles'

interface ApiData {
    userId: number;
    id: number,
    title: string,
    body: string
}

export interface Props {
    data: ApiData
}

export function PostAPI({ data } : Props){
    return (
        <Container>
            <Ids>
                <UserId>{`Id do usuário: ${data.userId}`} </UserId>
                <Id>{`Id: ${data.id}`}</Id>
            </Ids>
            <Wrapper>
                <Title>{data.title}</Title>
                <Body>{data.body}</Body>
            </Wrapper>
        </Container>
    )
}