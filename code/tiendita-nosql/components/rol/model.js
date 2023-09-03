import mongoose, { Schema } from "mongoose"

const req_string = {
    type: String,
    required: true
}

const roleSchema = new Schema({
    nombre: req_string
}, {
    versionKey: false
})

export default mongoose.model('rol', roleSchema)