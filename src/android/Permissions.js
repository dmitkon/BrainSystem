import { PermissionsAndroid } from "react-native";

export const requestAccessFineLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Необходим доступ к точному местоположению',
        message:
          'Для выполнения поиска вы должны разрешить доступ к ' +
          'точному местоположению',
        buttonNegative: 'Отмена',
        buttonPositive: 'OK',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
};
