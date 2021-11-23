import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostsCard, PostCardProps } from '../../components/PostsCards';

import {
    Container,
    Header, 
    Title,
    Post,
    PostList
} from './styles'
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends PostCardProps {
    id: string;
}


export function Posts() {
    const [data, setData] = useState<DataListProps[]>([]);
    const [ListData, setListData] = useState<DataListProps[]>([]);

    const dataKey = '@blogpost:posts';

    async function loadPosts() {
        //pega todas os nomes das keys
        const keys = await AsyncStorage.getAllKeys();
        //pega todos os registros de todas as keys
        const response = await AsyncStorage.multiGet(keys);
        //cria uma variável para salvar todos os posts
        const postsFormatted: DataListProps[] = [];

        //cada elemento de response é um array
        //sendo a primeira posição a key
        //e a segunda o valor dessa key

        //percorre cada registro de response      
        response.forEach(record => {
            //verifica se a key do atual registro começa com o valor de dataKey,
            //ou seja, se começa com '@blogpost:posts
            //para assim filtrar apenas os registros que são posts
            if (record[0].startsWith(dataKey)) {
                //pega o value e converte em um array de posts
                const posts = JSON.parse(record[1]!);

                //formata a data
                const postsFormattedByKey: DataListProps[] = posts
                    .map((item: DataListProps) => {
                        const date = Intl.DateTimeFormat('pt-Br', {
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

                    });
                //coloca os posts da key atual em postsFormatted
                postsFormatted.push(...postsFormattedByKey);
            }
        });
        
        setData(postsFormatted);
        setListData(postsFormatted);

    }

    useEffect(() => {
        loadPosts()
    }, []);

    useFocusEffect(useCallback(() => {
        loadPosts()
    }, []));

    return (
        <Container>
            <Header>
                <Title>
                    Posts
                </Title>
            </Header>

            <Post>
                <PostList 
                    data={ListData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <PostsCard data={item} buttonDelete={() => {}}/>}
                />
            </Post>
        </Container>
    )
}