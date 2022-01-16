import React, { useState } from 'react';
import { Text, View } from 'react-native';

export const getRunCommand = () => {
    return "run";
};

export const getStopCommand = () => {
    return "stop";
};

export const getResetCommand = () => {
    return "reset";
};

const getTimeInitStatus = () => {
    return "init";
};

const getTimeProcessStatus = () => {
    return "process";
};

const getTimePauseStatus = () => {
    return "pause";
};

const getTimeIsUpStatus = () => {
    return "time_is_up";
};

const isValue = (value, onject) => {
    return value == onject;
};

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            time: 0,
            timeStatus: getTimeInitStatus()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.props.commands.forEach((item, i) => {
            if (isValue(item, getRunCommand())) {
                if (isValue(this.state.timeStatus, getTimeInitStatus())) {
                    this.setState({startDate: new Date()});
                    this.setState({timeStatus: getTimeProcessStatus()});
                };

                if (!isValue(this.state.timeStatus, getTimeIsUpStatus())) {
                    const nowDate = new Date();
                    this.setState({time: nowDate.getTime() - this.state.startDate.getTime()});
                };
            };
    
            if (isValue(item, getResetCommand())) {
                if (!isValue(this.state.timeStatus, getTimeInitStatus())) {
                    this.setState({time: 0});
                    this.setState({timeStatus: getTimeInitStatus()});
                };
            };
        });

        if (parseInt(this.state.time / 1000) == this.props.time) {
            if (!isValue(this.state.timeStatus, getTimeIsUpStatus())) {
                this.props.onTimeIsUp();
                this.setState({timeStatus: getTimeIsUpStatus()});
            };
        }
    }

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
                <Text style={this.props.style}>{isValue(this.state.timeStatus, getTimeIsUpStatus()) ? "Время истекло!" : this.getTimerText()}</Text>
            </View>
        );
    }
}

export default Timer;
