const Titulo = require('./models/Titulo');
exports.getTitulos = async (req,res) => {
    const titulos = await
    Titulo.find().populate('docente');
    res.send(titulos);
};

exports.createTitulo = async (req,res) => {
    const titulo = new Titulo(req.body);
    await titulo.save();
    res.send(titulo);
};