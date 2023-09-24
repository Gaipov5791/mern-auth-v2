const test = async (req, res) => {
    res.status(200).json({
        message: "Api is working"
    });
};

export {
    test,
}