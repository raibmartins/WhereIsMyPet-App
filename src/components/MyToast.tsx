import Toast from "react-native-toast-message";

class MyToastClass {

    public error(message : string) {
        this.show('error', message);
    }

    public success(message : string) {
        this.show('success', message);
    }

    public info(message : string) {
        this.show('info', message);
    }

    private show(type : string, message: string) {
        Toast.hide();
        Toast.show({
            type: type,
            text1: message,
            topOffset: 80,
            visibilityTime: 4000,
            text1Style: {
                fontWeight: 'bold',
                fontSize: 20
            },
            onPress: () => {
                Toast.hide();
            }
        })
    }
}


const MyToast = new MyToastClass();
export default MyToast;