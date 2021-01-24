import axios from 'axios'

let access = localStorage.getItem('token')
 const Api= () => {
    return axios.create({
        baseURL:'http://localhost:3011/api/v1',
        // baseURL:'https://invxt-app-pay.herokuapp.com/api/v1',
        headers: {
            'Authorization': access
          }
    });
};
export default Api