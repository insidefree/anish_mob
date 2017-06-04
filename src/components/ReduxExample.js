import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { createStore } from 'redux'


initialState = { count: 0 }

reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + action.amount }
        case 'DECREMENT': return { count: state.count - action.amount }
        case 'RESET': return { count: 0 }
        default: return state;
    }
}

increment = (amount) => {
    return { type: 'INCREMENT', amount }
}
decrement = (amount) => {
    return { type: 'DECREMENT', amount }
}
reset = () => {
    return { type: 'RESET' }
}

const store = createStore(reducer, initialState)

class ReduxExample extends Component {
    constructor(props) {
        super(props)
    }

    increment = () => {
        store.dispatch(increment(5))
    }

    decrement = () => {
        store.dispatch(decrement(2))
    }

    reset = () => {
        store.dispatch(reset())
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        const count = store.getState().count
        return (
            <View>
                <Text>
                    {count}
                </Text>

                <Button
                    onPress={this.increment}
                    title="Increment More"
                    color="#654321"
                    accessibilityLabel="Increment"
                    marginTop="20"
                />

                <Button
                    onPress={this.decrement}
                    title="Decrement More"
                    color="#821794"
                    accessibilityLabel="Decrement"
                />

                <Button
                    onPress={this.reset}
                    title="RESET"
                    color="#123456"
                    accessibilityLabel="RESET"
                />
                
            </View>
        )
    }
}

export default ReduxExample
