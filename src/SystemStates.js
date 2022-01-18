export const getBeginState = () => {
    return 0;
};

export const getRunState = () => {
    return 1;
};

export const getButtonPushState = () => {
    return 2;
};

export const getTimeIsUpState = () => {
    return 3;
};

export const getPauseState = () => {
    return 4;
};

export const isValueState = (value, state) => {
    return value == state;
};