import got from 'got'
import axios from "axios";

const URL = 'http://localhost:3000'
export async function makeGetRequests() {
    return axios({
        method: 'GET',
        url: URL,
    });
}
