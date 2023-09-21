import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const docenteSchema = new mongoose.Schema(
    {
      cedula: {
        type: String,
        unique: true,
      },
      nombre: {
        type: String,
        unique: true,
      },
      apellido: {
        type: String,
        required: true,
      },
      usuario: {
        type: String,
        required: true,
      },
      clave: {
        type: String,
        required: true,
      },

      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
      ],
    },
    {
      timestamps: true,
      versionKey: false,
    }
);

docenteSchema.statics.encryptPassword = async (clave) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(clave, salt);
  };
  
  docenteSchema.statics.comparePassword = async (clave, receivedClave) => {
    return await bcrypt.compare(password, receivedClave)
  }
  
  docenteSchema.pre("save", async function (next) {
    const docente = this;
    if (!docente.isModified("clave")) {
      return next();
    }
    const hash = await bcrypt.hash(docente.clave, 10);
    docente.clave = hash;
    next();
  })
  
  export default mongoose.model("Docente", docenteSchema);