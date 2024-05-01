import AsyncStorage from "@react-native-async-storage/async-storage";
import MyToast from "./MyToast";

// export conpnpnst PATH_URL = 'http://192.168.0.9:8080/';

class API {

    public async postAuth(path, body) {
        const auth = await AsyncStorage.getItem('auth');
        return this.post(path, body, auth)
    }

    public postNoAuth(path, body) {
        return this.post(path, body, null);
    }

    public async putAuth(path) {
        const auth = await AsyncStorage.getItem('auth');
        return this.put(path, auth)
    }

    private put(path, auth) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (auth != null) {
            headers['Authorization'] = 'Bearer ' + auth
        }
        
        return fetch(process.env.PATH_URL + path, {
            method: 'PUT',
            headers: headers
        }).then(response => {
            if (!response.ok) {
                this.showError(response);
                return null;
            }
            return response.json();
        }).catch(err => {
            return null;
        });
    }

    private post(path, body, auth) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (auth != null) {
            headers['Authorization'] = 'Bearer ' + auth
        }

        return fetch(process.env.PATH_URL + path, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }).then(response => {
            if (!response.ok) {
                this.showError(response);
                return null;
            }
            return response.json();
        }).catch(err => {
            return null;
        });
    }

    public async get(path) {
        const auth = await AsyncStorage.getItem('auth');

        return fetch(process.env.PATH_URL + path, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth
            }
        }).then(response => {
            if (!response.ok) {
                this.showError(response);
                return null;
            }
            return response.json();
        }).catch(err => {
            return null;
        });
    }

    private async showError(response) {
        let json = await response.json();
        MyToast.error(json.message);
    }
}

const api = new API();
export default api;