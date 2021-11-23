import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons'
import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;
`;

export const CardHeader = styled.View`
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: 20px 0px 10px 10px;
    //cima direira baixo esquerda
`;

export const UserWrapper = styled.View`
    flex-direction: row;
`;

export const Photo = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;

    border-radius: 50px;
`;

export const User = styled.View`
    margin-left: 10px;
`;

export const Icons = styled.View`
    width: 27%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10px 0px 0px;
`;

export const ButtonEdit = styled(BorderlessButton)``;

export const ButtonDelete = styled(BorderlessButton)``;

export const UserName = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const IconEdit = styled(AntDesign)`
    color: ${({ theme }) => theme.colors.icons};
    font-size: ${RFValue(24)}px;
`;

export const IconDelete = styled(AntDesign)`
    color: ${({ theme }) => theme.colors.icons};
    font-size: ${RFValue(24)}px;
`;

export const Content = styled.Text`
    background-color: ${({ theme }) => theme.colors.shape};
    height: ${RFPercentage(23)}px;
    padding: 17px 24px;
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