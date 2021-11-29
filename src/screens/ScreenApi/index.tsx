import React, {useEffect, useState} from 'react'

import {
    Container,
    Header,
    Title,
    List
} from './styles';

import { PostAPI } from '../../components/PostApi';
import { api } from '../../services/api';
import { ApiDTO } from '../../dtos/ApiDTO';

import { Load } from '../../components/Load';
import { SearchBar } from '../../components/SearchBar';
import { Alert } from 'react-native';

export function Api() {
    const [apis, setApis] = useState<ApiDTO[]>([]) 
    const [loading, setLoading] = useState(true)

    async function handleChangeInpuText(text: string) {
        if(!text) {
            fetchApi()
            return;
        }

        try {
            const response = await api.get(`/posts/${text}`)
            setApis([response.data]);
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchApi() {
        try {
            const response = await api.get(`/posts`)
            setApis(response.data)
        } catch (error) {
            Alert.alert("Erro ao buscar a Endpoint");
            console.log(error)
        } finally {
            setLoading(false) 
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <Container>
            <Header>
                <Title>
                    API's
                </Title>
            </Header>

            <SearchBar 
                placeholder="Qual Endpoint você procura?"
                onChangeText={handleChangeInpuText}
                onSearchButtonPress={() => {}}
            />

            { loading ? <Load /> : 
                <List
                    data={apis}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => 
                        <PostAPI data={item} />
                    }    
                />
            }
        </Container>
    )
}