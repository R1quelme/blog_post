import React, { useRef, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/auth";
import { DataListProps, EditTitleArgs } from '../../screens/Dashboard';
import { Feather } from '@expo/vector-icons'

import {
    View,
    CardHeader,
    UserWrapper,
    Photo,
    User,
    UserName,
    Title,
    Icons,
    ButtonEdit,
    IconEdit,
    ButtonDelete,
    IconDelete
} from './styles';
import { useEffect } from "react";

interface Props {
    data: DataListProps,
    buttonEdit: ({ titleId, postNewTitle }: EditTitleArgs) => void,
    buttonDelete: () => void
}

export function HeaderPost({ 
    data,
    buttonEdit,
    buttonDelete
} : Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [postNewTitleValue, setPostNewTitleValue] = useState(data.title);
    const textInputRef = useRef<TextInput>(null)

    const { user } = useAuth()

    function handleStartEditing() {
        setIsEditing(true)
    }

    function handleCancelEditing() {
        setPostNewTitleValue(data.title)
        setIsEditing(false)
    }

    function handleSubmitEditing() {
        buttonEdit({ titleId: data.id, postNewTitle: postNewTitleValue })
        setIsEditing(false)
    }

    useEffect(() => {
        if(textInputRef.current) {
            if(isEditing) {
                textInputRef.current.focus();
            } else {
                textInputRef.current.blur()
            }
        }
    }, [isEditing])

    return (
        <View>
            <CardHeader>
                <UserWrapper>
                    <Photo source={{ uri: user.photo }}/>
                    <User>
                        {/* <UserName>{data.userName}</UserName> */}
                        <UserName>{ user.name }</UserName>
                        {/* <Title>{data.title}</Title> */}
                        <TextInput 
                            value={postNewTitleValue}
                            onChangeText={setPostNewTitleValue}
                            editable={isEditing}
                            onSubmitEditing={handleSubmitEditing}
                            ref={textInputRef}
                        />
                    </User>
                </UserWrapper>

                <Icons>
                    {isEditing ? (
                        <TouchableOpacity
                            onPress={handleCancelEditing}
                            style={{ paddingHorizontal: 24 }}
                        >
                            <Feather name="x" size={24} color="#b2b2b2" />
                        </TouchableOpacity>
                    ) : (
                        <ButtonEdit onPress={handleStartEditing}>
                            <IconEdit name="edit"/>
                        </ButtonEdit>
                    )}

                    <ButtonDelete onPress={buttonDelete}>
                        <IconDelete name="delete" disabled={isEditing} style={{ opacity: isEditing ? 0.2 : 1 }}/>
                    </ButtonDelete>
                </Icons>

                {/* <Icons>
                    <ButtonEdit onPress={buttonEdit}>
                        <IconEdit name="edit"/>
                    </ButtonEdit>
                
                </Icons> */}
            </CardHeader>
        </View>
    )
}
