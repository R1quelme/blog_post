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

export function Api() {
    const [apis, setApis] = useState<ApiDTO[]>([]) 
    const [loading, setLoading] = useState(true)
    // const apiData = {
    //     idUser: 1,
    //     id: 2,
    //     title: 'Vamos cozinhar',
    //     body: 'Conteudo aqui vai vai ds dada sdfsafas a fssdf a ada dsfsfsf'    
    // }

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await api.get('/posts')
                setApis(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false) 
            }
        }

        fetchApi();
    }, []);

    return (
        <Container>
            <Header>
                <Title>
                    API's
                </Title>
            </Header>

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