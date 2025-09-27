module.exports = function isLoggedOut(req, res, next) {
    if (!req.user) {
        return next();
    }
    res.redirect('/');
}
