import {Date} from "./Date";

describe ("Date", () => {
    it("should return a string", () => {
        const date = new Date(2020, 1, 2);
        expect(date.asString()).toBe("2/2/2020");
    })
})