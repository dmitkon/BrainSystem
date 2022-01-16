import React, { useState } from 'react';
import { Text, Switch, View } from 'react-native';
import { 
    getBeginState,
    getRunState,
    getButtonPushState,
    getEndTimeState,
    isValueState
} from '../../src/SystemStaes';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {    
        this.setState({date: new Date()});
    }

    getTimerText() {
        const addTimeBlock = (text, time) => {
            if (parseInt(time / 10) == 0)
                text += "0";

            text += time;

            return text;
        };

        let timerText = "";

        timerText = addTimeBlock(timerText, this.state.date.getSeconds());
        timerText += ":";
        timerText = addTimeBlock(timerText, parseInt(this.state.date.getMilliseconds() / 10));

        return timerText;
    };

    render () {
        return (
            <View>
                <Text style={this.props.style}>{true ? this.getTimerText() : "Время истекло!"}</Text>
            </View>
        );
    }
}

/*const Timer = (props) => {
    const [timeView, setTimeView] = useState(getTimerText(0, 0));

    const timerProcess = (timer) => {
        let startTime = new Date();

        while (isValueState(props.state, getRunState())) {
            let nowTime = new Date();

            let ms = nowTime.getTime() - startTime.getTime()

            if (parseInt(ms / 1000) == timer)
                state = getEndTimeState();
                
            let s = parseInt(ms / 1000);
            let ss = parseInt(ms%1000 / 10);
            
            console.log(getTimerText(s, ss));
            setTimeView(getTimerText(s, ss));
        }
    }

    timerProcess(6);

    return (
        <View>
            <Text style={timerStyle.text}>{timeView}</Text>
        </View>
    );
};*/

export default Timer;
