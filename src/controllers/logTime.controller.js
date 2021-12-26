//import logTime model here

const addTiming = async (req, res) => {
    //addTiming api logic here
};

const getTimeByProjectId = async (req, res) => {
    //getTimeByProjectId api logic here
};

const getTimeByEmployeeId = async (req, res) => {
    //getTimeByEmployeeId api logic here
};

const updateTimingById = async (req, res) => {
    //updateTimingById api logic here
};

const deleteTimingId = async (req, res) => {
    //deleteTimingId api logic here
};

const LogTimeController = {
    addTiming,
    getTimeByProjectId,
    getTimeByEmployeeId,
    updateTimingById,
    deleteTimingId
};
module.exports = LogTimeController;