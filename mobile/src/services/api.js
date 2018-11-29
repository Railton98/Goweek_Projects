import axios from 'axios';
// http://localhost:3000 => ios
// http://10.0.2.2:3000 => android/sdkManager
// http://10.0.3.2:3000 => android/Genymotion
const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;
