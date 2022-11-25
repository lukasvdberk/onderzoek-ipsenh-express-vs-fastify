import {StopWatch} from "stopwatch-node";
import {makeGetRequests} from "./tests/get-data.json";
import {post100MBFile, post1GBFile} from "./tests/file-upload";
import {makePostRequestData} from "./tests/post-data.json";
import * as fs from "fs";

const TEST_PERFORMANCE_EXCEL_LOCATION = process.argv[2] // first argument is the location of the excel file

/**
 * Performs a function 100 times and measures the time it took in seconds to complete the 100 tests
 * @param functionToPerform
 */
async function performTest100Times(functionToPerform: () => Promise<any>): Promise<number> {
    const stopWatchTimer = new StopWatch('sw');

    const taskName = 'task run'
    stopWatchTimer.start(taskName);
    // perform 100 times
    for (let i = 0; i < 100; i++) {
        await functionToPerform()
    }

    stopWatchTimer.stop();
    return stopWatchTimer.getTotalTime() / 1000 // since total time is in milliseconds
}

function writeResultsToFile(testResults: any[]) {
    // write the results to a csv file
    let textFile = 'Get request Tests, Post request Tests, Post 100MB file, Post 1GB file \n';
    for (const testResult of testResults) {
        textFile += testResult.join(',') + '\n'
    }

    fs.writeFileSync(TEST_PERFORMANCE_EXCEL_LOCATION, textFile);
}

async function performTests() {
    // get request tests
    const combinedTestResults = [];

    for (let i = 0; i < 1000; i++) {

        const getRequestTimeInSeconds = await performTest100Times(makeGetRequests)
        const postRequestTimeInSeconds = await performTest100Times(makePostRequestData)
        const timeItTookToPost100MBFileInSeconds = await performTest100Times(post100MBFile)
        const timeItTookToPost1GBFileInSeconds = await performTest100Times(post1GBFile)

        // results
        console.table({
            'Get request Tests': getRequestTimeInSeconds,
            'Post request Tests': postRequestTimeInSeconds,
            'Post 100MB file': timeItTookToPost100MBFileInSeconds,
            'Post 1GB file': timeItTookToPost1GBFileInSeconds,
        })
        combinedTestResults.push([getRequestTimeInSeconds, postRequestTimeInSeconds, timeItTookToPost100MBFileInSeconds, timeItTookToPost1GBFileInSeconds])
    }

    writeResultsToFile(combinedTestResults)
}

// start the tests as main
(performTests().then(console.log).catch(console.log));