import React, { useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { SearchBar } from '../../components/SearchBar';
import { PostsCard, PostCardProps } from '../../components/PostsCards';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserPhrase,
    Icon,
    Posts,
    // Title,
    PostList,
    LogoutButton
} from './styles';
import { useAuth } from '../../hooks/auth';
import { Alert } from 'react-native';

import { usePost } from "../../hooks/usePost";

export type EditTitleArgs = {
    titleId: string;
    postNewTitle: string
}

export function Dashboard() {
    const navigation = useNavigation();
    const { user, signOut } = useAuth();
    const { posts, editPostTitle, removePost } = usePost();
    

    function handleView(post: any){
        //navigation.navigate('View', { post })
    }

    const [searchData, setSearchData] = useState(posts);
    const [searchText, setSearchText] = useState('');
 
    useEffect(() => {
        handleFilterLoginData();
    }, [posts]);

    function handleFilterLoginData() {
        const filteredData = posts.filter(data => {
            const isValid = data.title
                .toLowerCase()  
                .includes(searchText.toLowerCase());

            if(isValid) {
                return data;
            }
        })
      
        setSearchData(filteredData)
    }

    function handleChangeInputText(text: string) {
        if(!text) {
            setSearchData(posts);
        }

        setSearchText(text);
    }

    async function handleRemoveSkill(transactionId: string) {
        removePost(transactionId);
    }
    
    function alerta(title: string, id: string){
        Alert.alert(`Você deseja deletar ${String(title)}`,
        "",
        [
            {text: 'Cancelar', },
            {text: 'Deletar', onPress: () => handleRemoveSkill(id) },
        ],
            {cancelable: false}
        )
    }

    function handleEditTitle({ titleId, postNewTitle }: EditTitleArgs){
        editPostTitle(titleId, postNewTitle);
    }

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: user.photo }}/>
                        <User>
                            <UserGreeting>Olá,  
                                <UserName> { user.name }</UserName>
                            </UserGreeting>
                            <UserPhrase>Compartilhe conhecimentos</UserPhrase>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={signOut}>
                        <Icon name="power"/>
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <SearchBar 
                placeholder="Qual post você procura?"
                onChangeText={handleChangeInputText}
                value={searchText}
                returnKeyType="search"
                onSubmitEditing={handleFilterLoginData}
                onSearchButtonPress={handleFilterLoginData}
            />

            <Posts>
                {/* <Title>Publicações</Title> */}
                <PostList 
                    data={searchData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                        <PostsCard 
                            data={item} 
                            buttonEdit={handleEditTitle}
                            buttonDelete={() => alerta(item.title, item.id)} 
                            buttonView={() => handleView(item)}
                        />
                    }
                />
            </Posts>
        </Container>
    )
}