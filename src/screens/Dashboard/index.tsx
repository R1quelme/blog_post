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

export interface DataListProps extends PostCardProps {
    id: string;
}

export type EditTitleArgs = {
    titleId: string;
    postNewTitle: string
}

export function Dashboard() {
    const navigation = useNavigation();
    function handleView(post: DataListProps){
        navigation.navigate('View', { post })
    }

    const [data, setData] = useState<DataListProps[]>([]);
    const [searchListData, setSearchListData] = useState<DataListProps[]>([]);
    const [searchText, setSearchText] = useState('');

    const { user, signOut } = useAuth();
 
    const dataKey = `@blogpost:posts:${user.id}`;

    async function loadTransactions(){
        const response = await AsyncStorage.getItem(dataKey);
        const posts = response ? JSON.parse(response) : [];

        const postsFormatted: DataListProps[] = 
        posts.map((item: DataListProps) => {

            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date));

            return {
                id: item.id,
                // userName: item.userName,
                title: item.title,
                content: item.content,
                date
            }
        })   

        setData(postsFormatted);
        setSearchListData(postsFormatted);
    }

    useEffect(() => {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions()
    },[]));

    function handleFilterLoginData() {
        const filteredData = data.filter(data => {
            const isValid = data.title
                .toLowerCase()  
                .includes(searchText.toLowerCase());

            if(isValid) {
                return data;
            }
        })
      
        setSearchListData(filteredData)
    }

    function handleChangeInputText(text: string) {
        if(!text) {
           setSearchListData(data)
        }

        setSearchText(text);
    }

    async function handleRemoveSkill(transactionId: string) {
        const response = await AsyncStorage.getItem(dataKey);
        const storagedTransactions = response ? JSON.parse(response) : [];
       
        const filteredTransactions = storagedTransactions
        .filter((transaction: DataListProps) => transaction.id !== transactionId);
      
        setData(filteredTransactions);
        await AsyncStorage.setItem(dataKey, JSON.stringify(filteredTransactions));
  
        loadTransactions()
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

    async function saveTitle(title: DataListProps[]) {
        await AsyncStorage.setItem('@app:title', JSON.stringify(title));   
    }

    // function handleEditTitle({ titleId, postNewTitle }: EditTitleArgs){
    //     const updatedTitle = data.map(data => ({...data}))

    //     const titleToBeUpdated = updatedTitle.find(data => data.id === titleId)

    //     if(!titleToBeUpdated)
    //         return;

    //     titleToBeUpdated.title = postNewTitle;

    //     setData(updatedTitle);
    //     saveTitle(updatedTitle);
    // }

    function handleEditTitle({ titleId, postNewTitle }: EditTitleArgs){
        const updatedTitle = data.map(data => ({
          ...data,
          title: data.id === titleId ? postNewTitle : data.title
        }));
        
        setData(updatedTitle);
        saveTitle(updatedTitle);
    }

    useEffect(() => {
        async function loadTitle(){
          const data = await AsyncStorage.getItem('@app:title');
        
          const parsedData = data ? (JSON.parse(data) as DataListProps[]) : [];
          setData(parsedData);
        }
        
        loadTitle()
      }, []);

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
                    data={searchListData}
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