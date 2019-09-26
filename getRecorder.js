import Recorder from './recorder.wav';

const getRecorder = new Recorder({
    type: 'wav',
    bitRate: 16,
    sampleRate: 16000,
});

function recorderOpen() {
    getRecorder.open(
        () => {
            // console.log('blobstart3333', getRecorder);
            getRecorder.start();
        },
        msg => {
            // console.log('yhc--open----', msg);
        }
    );
}

function recorderStop() {
    return new Promise((resolve, reject) => {
        getRecorder.stop(function(blob, duration) {
            resolve(blob, duration);
        });
    });
}

export { recorderOpen, recorderStop };
