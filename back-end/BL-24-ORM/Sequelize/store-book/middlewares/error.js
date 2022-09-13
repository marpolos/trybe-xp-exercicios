module.exports = (err, req, res, _next) => {
    return res.status(err.status || 500).json(err.message || 'Erro inexperado.');
}
