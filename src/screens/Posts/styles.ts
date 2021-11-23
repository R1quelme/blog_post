import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { DataListProps } from './';

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
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular}; 
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Post = styled.View`
    flex: 1%;
    padding: 0 24px;
    
    margin-top: ${RFPercentage(4)}px;
`;

export const PostList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    } 
})`
    
`;


// export const PostList = styled(
//     FlatList as new () => FlatList<DataListProps>
//     ).attrs({
//     showsVerticalScrollIndicator: false,
//     contentContainerStyle: {
//         paddingBottom: getBottomSpace()
//     }
// })`

// `;