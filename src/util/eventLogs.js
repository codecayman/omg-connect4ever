const eventLogs = {
    logs: [],
    addLog: function (lobObj) {
        let stamp = new Date();
        this.logs.push({
            obj: lobObj,
            timeStamp: stamp.getHours() + ':' + stamp.getMinutes() + ":" + stamp.getSeconds() + "." + stamp.getMilliseconds()
        });
        console.log(this.logs);
    }
}

export default eventLogs