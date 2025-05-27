"use strict";
/* interface is  blueprint of an object-  it defines properties and methods(behavior) of objects.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Ab = {
    dbId: 22,
    email: "ab@ab.com",
    userId: 123,
    gitHubToken: "gh_12345",
    startTrail: () => {
        return "Trail started";
    },
    getCoupon: (name, off) => {
        return 10;
    },
};
Ab.email = "rj@gmail.com";
const bear = getBear();
bear.name;
bear.honey;
function getBear() {
    return {
        name: "Yogi",
        honey: true,
    };
}
