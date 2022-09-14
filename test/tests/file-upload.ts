import axios from "axios";
import * as FormData from 'form-data';
const path = require('path')
const fs = require('fs');
const request = require('request');


export async function post100MBFile() {
    const file = await postFile('http://127.0.0.1:3000/files/single-file', 'POST', path.resolve(process.cwd(), 'test/assets/100MB.bin'))
    return file;
}

export async function post1GBFile() {
    return await postFile('http://127.0.0.1:3000/files/single-file', 'POST', path.resolve(process.cwd(), 'test/assets/1GB.bin'));
}

/**
 * Uploads a file to the server
 * @param method - The HTTP method to use, e.g. 'POST'
 * @param url - The URL to send the request to
 * @param filepath - File path to the file to upload
 */
async function postFile(url:string, method: string, filepath: string): Promise<any> {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filepath), "file.bin");
    return axios({
        method: method,
        url: url,
        data: formData,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {'Content-Type': 'multipart/form-data;boundary=' + formData.getBoundary()}
    });
}