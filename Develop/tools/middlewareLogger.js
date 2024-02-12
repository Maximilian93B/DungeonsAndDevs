// This tool will log all server traffic in the terminal through middleware  

const mwLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} ${req.path}`);
    next();
};

module.exports = mwLogger; 