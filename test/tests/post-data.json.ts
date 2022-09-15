import axios from "axios";
import * as assert from "assert";

const URL = 'http://localhost:3000'

const postData = [
    { name: 'example0', description: 'example0', price: 0 },
    { name: 'example1', description: 'example1', price: 1 },
    { name: 'example2', description: 'example2', price: 2 },
    { name: 'example3', description: 'example3', price: 3 },
    { name: 'example4', description: 'example4', price: 4 },
    { name: 'example5', description: 'example5', price: 5 },
]
export async function makePostRequestData() {
    // make a post request with axios
    const response = await axios(   {
        method: 'POST',
        url: URL,
        data: postData, // this is the body
    });

    assert(response.status == 201);
}
