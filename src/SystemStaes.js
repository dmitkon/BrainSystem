export const getBeginState = () => {
    return 0;
};

export const getRunState = () => {
    return 1;
};

export const getButtonPushState = () => {
    return 2;
};

export const getEndTimeState = () => {
    return 3;
};

export const isValueState = (value, state) => {
    return value == state;
};