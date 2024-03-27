const PacienteSchema = require("../models/pacienteSchema");

const createPaciente = async (req, res) => {
  try {
    if (!req.body.nome || !req.body.email) {
      res.status(404).send({
        message: "Os campos obrigatórios precisam ser enviados",
        statusCode: 404,
      });
    }

    const newPaciente = new PacienteSchema({
      nome: req.body.nome,
      email: req.body.email,
      genero: req.body.genero,
      createdAt: new Date(),
    });

    const savedPaciente = await newPaciente.save();

    if (savedPaciente) {
      res.status(201).send({
        message: "paciente criado com sucesso",
        savedPaciente,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const getAll = async (req, res) => {
  try {
    const allPacientes = await PacienteSchema.find();
    res.status(200).send(allPacientes);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (req, res) => {
  try {
    const paciente = await PacienteSchema.findById(req.params.id)

    if(!paciente) {
      return res.status(404).json({
        message: 'paciente não encontrado.'
      })
    }
    res.status(200).json({
      message: 'Paciente:',
      paciente
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updatePaciente = async (req, res) => {
  try {
    const findPaciente = await PacienteSchema.findById(req.params.id);
    console.log("Paciente econtrado", findPaciente);

    if (!findPaciente) {
      res.status(404).send({
        message: "paciente não encontrada",
        statusCode: 404,
      });
    }

    findPaciente.email = req.body.email || findPaciente.email;
    
    const savedPaciente = await findPaciente.save();

    res.status(200).send({
      message: "email atualizado com sucesso",
      savedPaciente,
    });
  } catch (err) {
    console.error(err);
  }
};

const deletePaciente = async (req, res) => {
  try {
    const deletedPaciente = await PacienteSchema.findByIdAndDelete(
      req.params.id
    );

    res.status(200).send({
      message: "Cadastro deletado com sucesso",
      deletedPaciente,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPaciente,
  getAll,
  getById,
  updatePaciente,
  deletePaciente
};
