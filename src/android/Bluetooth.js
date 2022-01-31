import RNBluetoothClassic, { BluetoothDevice } from 'react-native-bluetooth-classic';
import { requestAccessFineLocationPermission } from './Permissions';

export const bluetoothInit = async () => {
    let statusMsg = "OK";

    if (! await RNBluetoothClassic.isBluetoothAvailable())
        statusMsg = "Недоступен (Вы не можете использовать Bluetooth)";

    if (statusMsg == "OK")
        if (! await RNBluetoothClassic.isBluetoothEnabled())
            statusMsg = "Выключен (для продолжения работы нужно включить Bluetooth)";

    return statusMsg;
}

export const startDiscovery = async () => {
    let devices = [];
    let granted = await requestAccessFineLocationPermission();
    
    if (granted)
        devices = await RNBluetoothClassic.startDiscovery();

    console.log(devices);
    
    return {devices: devices, granted: granted};
};

export const cancelDiscovery = async () => {
    let canceled = await RNBluetoothClassic.cancelDiscovery();
    
    console.log(canceled);
    
    return canceled;
};
