import React from 'react';
import { 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/Forms/InputForm'
import { Button } from '../../components/Forms/Button'
 
import {
    Container,
    Header,
    Title,
    Form,
    Fields
} from './styles';
import { useAuth } from '../../hooks/auth';

interface FormData {
    title: string;
    content: string;
}

const schema = Yup.object().shape({
    title: Yup
    .string()
    .required('Titulo é obrigatorio'),
    content: Yup
    .string()
    .required('Conteudo é obrigatório')
})

export function Register(){
    const { user } = useAuth()

    const dataKey = `@blogpost:posts:${user.id}`;
    const navigation = useNavigation();

    const { 
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleRegister(form: FormData){
        const newTransaction = {
            id: String(uuid.v4()),
            title: form.title,
            content: form.content,
            date: new Date(),
            name: user.name,
            photo: user.photo
        }
        
        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ] 

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))
            reset();

            navigation.navigate('Dashboard');

        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possivel salvar");
        }
    } 

        // useEffect(() => {
    //     async function loadData(){
    //         const data = await AsyncStorage.getItem(dataKey);
    //         console.log(JSON.parse(data!))
    //     }

    //     loadData();

        // async function removeAll() {
        //     await AsyncStorage.removeItem(dataKey)
        // }

        // removeAll()
    // }, [])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="title"
                            control={control}
                            placeholder="Título"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.title && errors.title.message}
                            multiline={false}
                        />
                        <InputForm
                            name="content"
                            control={control}
                            placeholder="Compartilhe sua ideia"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.content && errors.content.message}
                            multiline={true}
                        />
                    </Fields>
                    <Button 
                        title="Cadastrar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    );
}