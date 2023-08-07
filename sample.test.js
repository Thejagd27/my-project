require('dotenv').config();
process.env['JEST_TEST'] = 'true';

const inputFunction = require('./sample');
const inputJson = require('./create-notification');


beforeAll(done => {
    done();
});

afterAll(done => {
    done();
});

function findObject(testcaseName) {
    return inputJson.find(obj => obj.name === testcaseName);
}

async function genericTestImplementor() {
    const testcaseName = expect.getState().currentTestName.split(' ');
    if (testcaseName.length > 2) {
        console.log('describe and it name should not have space');
        expect(testcaseName.length).toEqual(2);
    } else {
        const testcaseObj = findObject(testcaseName[1]);
        if (testcaseObj) {
            try {
                const result = await inputFunction[testcaseObj.function_name](testcaseObj.input);
                expect(result.error[0]).toEqual(testcaseObj.output);
            } catch (e) {
                console.error(__filename.slice(__dirname.length + 1), ' : ', testcaseObj.name, e);
                expect(true).toBe(false);
            }
        }
        else {
            console.error(__filename.slice(__dirname.length + 1), ' : ', expect.getState().currentTestName, ' Testcase object not found');
            expect(testcaseObj).toBeTruthy();
        }
    }
}

describe("CreateNotification", () => {
    it("contextNotSent", async () => {
        await genericTestImplementor();
    });
    it("contextNotValid", async () => {
        await genericTestImplementor();
    });
    it("contextIdNotSent", async () => {
        await genericTestImplementor();
    });
    it("contextIdNotValid", async () => {
        await genericTestImplementor();
    });
    it("toUuidNotSent", async () => {
        await genericTestImplementor();
    });
    it("toUuidNotValid", async () => {
        await genericTestImplementor();
    });
    it("notificationNotSent", async () => {
        await genericTestImplementor();
    });
    it("notificationNotValid", async () => {
        await genericTestImplementor();
    });
    it("clickActionUrlNotSent", async () => {
        await genericTestImplementor();
    });
    it("clickActionUrlNotValid", async () => {
        await genericTestImplementor();
    });
    it("serviceNotSent", async () => {
        await genericTestImplementor();
    });
    it("serviceNotValid", async () => {
        await genericTestImplementor();
    });
});