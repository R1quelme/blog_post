import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;

    /* flex-direction: row; */
    /* justify-content: space-between;  */
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular}; 
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
    margin-right: ${RFValue(105)}px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    /* justify-content: space-between; */
`;

export const Align = styled.View`
    flex: 1;
    margin-left: ${RFValue(15)}px;
`;

export const Content = styled.View`
    height: ${RFPercentage(23)}px;
    padding: 17px 24px;
`;

export const TitlePost = styled.Text`
    text-align: center;
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextPost = styled.Text`
    font-size: ${RFValue(14)}px;
    padding-top: ${RFValue(10)}px;
    text-align: justify;
`;

export const DatePost= styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    padding: 3px 24px 0px 0px;
    text-align: right;
    padding-top: ${RFValue(15)}px;
`;
