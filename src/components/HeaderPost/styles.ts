import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'

export const View = styled.View`

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