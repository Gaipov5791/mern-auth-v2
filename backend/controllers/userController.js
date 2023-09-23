const auth = async (req, res) => {
    res.status(200).json({
        message: "Api is working"
    });
};

export {
    auth,
}