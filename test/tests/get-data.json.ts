import axios from "axios";
import * as assert from "assert";

const URL = 'http://localhost:3000'
export async function makeGetRequests() {
    const response = await axios({
        method: 'GET',
        url: URL,
    });

    assert(response.status == 200);
}
