import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';
import { multiply } from "react-native-reanimated";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps{
    title: string;
    onPress: () => void;
}

export function Button({ 
    title, 
    onPress,
    ...rest
}: Props){
    return (
        <Container onPress={onPress} {...rest}>
            <Title>
                { title }
            </Title>
        </Container>
    )
}