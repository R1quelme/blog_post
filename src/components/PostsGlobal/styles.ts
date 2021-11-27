import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons'
import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    background-color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    padding: 17px 24px;
    text-align: center;
`;

export const Content = styled.Text`
    background-color: ${({ theme }) => theme.colors.shape};
    height: ${RFPercentage(15)}px;
    padding: 5px 24px;
`;

export const ButtonView = styled(BorderlessButton)``;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    height: ${RFPercentage(5)}px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const IconView = styled(AntDesign)`
    color: ${({ theme }) => theme.colors.icons};
    font-size: ${RFValue(24)}px;
    padding-left: 24px;
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    padding: 3px 24px 0px 0px;
`;