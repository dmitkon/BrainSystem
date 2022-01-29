import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';

export const bluetoothInit = async () => {
    let statusMsg = "OK";

    if (! await RNBluetoothClassic.isBluetoothAvailable())
        statusMsg = "Недоступен (Вы не можете использовать Bluetooth)";

    if (statusMsg == "OK")
        if (! await RNBluetoothClassic.isBluetoothEnabled())
            statusMsg = "Выключен (для продолжения работы нужно включить Bluetooth)";

    return statusMsg;
}
