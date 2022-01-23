import { Button, TextInput, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from 'core'

export default () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <Button
                onPress={e => {
                    if (!text.trim()) {
                        return
                    }
                    dispatch(addTodo(text))
                    setText('')
                }}
                color='white'
                title="Add Todo"
                style={{ height: 40 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1, width: '60%', borderRadius: 10, backgroundColor:'white'
    }
});