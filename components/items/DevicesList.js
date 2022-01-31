import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

class DevicesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data)
            this.setState({data: this.props.data});
    };

    render () {
        return (
            <FlatList data={this.state.data} renderItem={({ item }) => {
                return (
                    <View>
                        <TouchableOpacity onPress={this.props.itemPress}>
                            <Text style={this.props.style}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }} />
        );
    };
};

export default DevicesList;
