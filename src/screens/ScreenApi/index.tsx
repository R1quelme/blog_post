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

export function Api() {
    const [searchText, setSearchText] = useState('')
    const [apis, setApis] = useState<ApiDTO[]>([]) 
    const [loading, setLoading] = useState(true)

    function handleChangeInpuText(text: string){
        setSearchText(text)
    }

    async function fetchApi() {
        try {
            const response = await api.get(`/posts/1`)
            setApis(response.data)
        } catch (error) {
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
                placeholder="Qual API você procura?"
                onChangeText={handleChangeInpuText}
                onSearchButtonPress={fetchApi}
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