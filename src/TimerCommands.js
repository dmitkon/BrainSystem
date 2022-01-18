export const getRunCommand = () => {
    return "run";
};

export const getStopCommand = () => {
    return "stop";
};

export const getResetCommand = () => {
    return "reset";
};

export const getResetAndStartCommand = () => {
    return "reset_and_start";
};

export const isValueCommand = (value, command) => {
    return value == command;
};