import React from 'react';
import { Text, View } from 'react-native';
import {
    getRunCommand,
    getStopCommand,
    getResetCommand,
    getResetAndStartCommand,
    isValueCommand
} from '../../src/TimerCommands';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            time: 0,
            pastTime: 0,
            timeStatus: true
        };
    };
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    componentDidUpdate(prevProps) {
        if (this.props.command !== prevProps.command) {
            if (isValueCommand(this.props.command, getRunCommand()))
                if (this.state.timeStatus) {
                    this.setState({startDate: new Date()});
                    this.timerID = setInterval(() => this.tick(), 1);
                };

            if (isValueCommand(this.props.command, getStopCommand())) {
                clearInterval(this.timerID);
                this.setState({pastTime: this.state.time});
            };

            if (isValueCommand(this.props.command, getResetCommand())) {
                clearInterval(this.timerID);
                this.setState({time: 0});
                this.setState({pastTime: 0});
                this.setState({timeStatus: true});
            };

            if (isValueCommand(this.props.command, getResetAndStartCommand())) {
                if (this.state.timeStatus) {
                    clearInterval(this.timerID);
                    this.setState({time: 0});
                    this.setState({pastTime: 0});

                    this.setState({startDate: new Date()});
                    this.timerID = setInterval(() => this.tick(), 1);
                };
            };
        };
    };
    
    tick() {
        const nowDate = new Date();
        this.setState({time: nowDate.getTime() - this.state.startDate.getTime() + this.state.pastTime});

        if (parseInt(this.state.time / 1000) == this.props.time) {
            if (this.state.timeStatus) {
                this.props.onTimeIsUp();
                this.setState({timeStatus: false});
            };
        };
    };

    getTimerText() {
        const addTimeBlock = (text, time) => {
            if (parseInt(time / 10) == 0)
                text += "0";

            text += time;

            return text;
        };

        let timerText = "";

        timerText = addTimeBlock(timerText, parseInt(this.state.time / 1000));
        timerText += ":";
        timerText = addTimeBlock(timerText, parseInt(this.state.time % 1000 / 10));

        return timerText;
    };

    render () {
        return (
            <View>
                <Text style={this.props.style}>{this.props.time == null ? "Без таймера" : this.state.timeStatus ? this.getTimerText() : "Время!"}</Text>
            </View>
        );
    };
};

export default Timer;
