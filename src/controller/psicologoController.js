const PsicologoSchema = require("../models/psicologoSchema");

const createPsicologo = async (req, res) => {
  try {
    if (!req.body.nome || !req.body.registro) {
      res.status(404).send({
        message: "Os campos obrigatórios precisam ser enviados",
        statusCode: 404,
      });
    }

    const newPsicologo = new PsicologoSchema({
      nome: req.body.nome,
      registro: req.body.registro,
      email: req.body.email,
      espec: req.body.espec,
      createdAt: new Date(),
    });

    const savedPsicologo = await newPsicologo.save();

    if (savedPsicologo) {
      res.status(201).send({
        message: "Profissional cadastrado com sucesso",
        savedPsicologo,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const getAll = async (req, res) => {
  try {
    const allPsicologos = await PsicologoSchema.find();
    res.status(200).send(allPsicologos);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (req, res) => {
  try {
    const psicologo = await PsicologoSchema.findById(req.params.id)

    if(!psicologo) {
      return res.status(404).json({
        message: 'professional não encontrado.'
      })
    }
    res.status(200).json({
      message: 'Psicologo:',
      psicologo
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updatePsicologo = async (req, res) => {
  try {
    const findPsicologo = await PsicologoSchema.findById(req.params.id);
    console.log("Psicologo econtrado", findPsicologo);

    if (!findPsicologo) {
      res.status(404).send({
        message: "profissional não encontrado",
        statusCode: 404,
      });
    }

    findPsicologo.email = req.body.email || findPsicologo.email;
    findPsicologo.espec = req.body.espec || findPsicologo.espec
    
    const savedPsicologo = await findPsicologo.save();

    res.status(200).send({
      message: "email atualizado com sucesso",
      savedPsicologo,
    });
  } catch (err) {
    console.error(err);
  }
};

const deletePsicologo = async (req, res) => {
  try {
    const deletedPsicologo = await PsicologoSchema.findByIdAndDelete(
      req.params.id
    );

    res.status(200).send({
      message: "Cadastro deletado com sucesso",
      deletedPsicologo,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPsicologo,
  getAll,
  getById,
  updatePsicologo,
  deletePsicologo
};
