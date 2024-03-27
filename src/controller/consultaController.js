const ConsultaSchema = require("../models/consultaSchema");

const createConsulta = async (req, res) => {
  try {
    if (!req.body.paciente || !req.body.psicologo) {
      res.status(404).send({
        message: "Os campos obrigatórios precisam ser enviados",
        statusCode: 404,
      });
    }

    const newConsulta = new ConsultaSchema({
      paciente: req.body.paciente,
      psicologo: req.body.psicologo,
      dataConsulta: req.body.dataConsulta,
      createdAt: new Date(),
    });

    const savedConsulta = await newConsulta.save();

    if (savedConsulta) {
      res.status(201).send({
        message: "consulta agendada com sucesso",
        savedConsulta,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const getAll = async (req, res) => {
  try {
    const allConsultas = await ConsultaSchema.find()
      .populate("paciente")
      .populate("psicologo");
    res.status(200).send(allConsultas);
  } catch (err) {
    console.error(err);
  }
};

const getById = async (req, res) => {
  try {
    const consulta = await ConsultaSchema.findById(req.params.id)

    if(!consulta) {
      return res.status(404).json({
        message: 'Consulta não encontrada.'
      })
    }
    res.status(200).json({
      message: 'Consulta:',
      consulta
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateConsulta = async (req, res) => {
  try {
    const findConsulta = await ConsultaSchema.findById(req.params.id);
    console.log("consulta encontrada", findConsulta);

    if (!findConsulta) {
      res.status(404).send({
        message: "consulta não encontrada",
        statusCode: 404,
      });
    }

    findConsulta.psicologo = req.body.psicologo || findConsulta.psicologo;
    findConsulta.dataConsulta = req.body.dataConsulta || findConsulta.dataConsulta;

    const savedConsulta = await findConsulta.save();

    res.status(200).send({
      message: "Consulta atualizada com sucesso",
      savedConsulta,
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteConsulta = async (req, res) => {
  try {
    const deletedConsulta = await ConsultaSchema.findByIdAndDelete(
      req.params.id
    );

    res.status(200).send({
      message: "Consulta cancelada com sucesso",
      deletedConsulta,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createConsulta,
  getAll,
  getById,
  updateConsulta,
  deleteConsulta,
};
