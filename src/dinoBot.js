const robot = require('robotjs');
const sleep = require('sleep');

const pixelCheckOne = [1120, 260];
const pixelCheckTwo = [1123, 255];
const pixelReplayBtn = [1273, 226];

function runBot () {
    while (true) {
        const pixelColorOne = robot.getPixelColor(pixelCheckOne[0], pixelCheckOne[1]);
        const pixelColorTwo = robot.getPixelColor(pixelCheckTwo[0], pixelCheckTwo[1]);
        const pixelColorReplayBtn = robot.getPixelColor(pixelReplayBtn[0], pixelReplayBtn[1]);

        if ((pixelColorOne === '535353' || pixelColorOne === 'acacac') || (pixelColorTwo === '535353' || pixelColorTwo === 'acacac')) {
            jump();
        } else if (pixelColorReplayBtn === '535353' || pixelColorReplayBtn === 'acacac') {
            robot.keyTap('space');
        }
    }
}

function jump () {
    robot.keyToggle('down', 'up');
    robot.keyToggle('space', 'down');
    sleep.msleep(190);
    robot.keyToggle('space', 'up');
    robot.keyToggle('down', 'down');
}

runBot();
