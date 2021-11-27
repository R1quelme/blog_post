import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 330px;

    background-color: ${({ theme }) => theme.colors.shape};
    padding: 24px;
    margin-bottom: 16px;
`;

export const Ids = styled.View`
    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;
`;

export const UserId = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(13)}px;
`;

export const Id = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(13)}px;

    margin-left: ${RFValue(40)}px;
`;

export const Wrapper = styled.View`

`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    margin-bottom: 5px;
    text-align: left;
`;

export const Body = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    text-align: left;
`;

