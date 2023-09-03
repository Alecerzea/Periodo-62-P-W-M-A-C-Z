import empleado from '../components/empleado/model'
import rol from '../components/rol/model'

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const empleado = await empleado.findOne({username: req.body.username})
    if (empleado) 
        return res.status(400).json({message: 'The user already exists.'})

    const email = await empleado.findOne({email: req.body.email})
    if (email)
        return res.status(400).json({message: 'The email already exists.'})
    
    next()
}

export const checkExistingUser = async (req, res, next) => {
    try {
        const userFound = await empleado.findOne({ username: req.body.username });
        if (userFound)
            return res.status(400).json({ message: "The user already exists" });

        const email = await empleado.findOne({ email: req.body.email });
        if (email)
            return res.status(400).json({ message: "The email already exists" });

        next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
  
export const checkExistingRole = async (req, res, next) => {
    try {
        const roles = await rol.find()
        let roles_nombres = []
        for (let valor of roles) {
            roles_nombres.push(valor.nombre)
        }

        if (!req.body.roles) 
            return res.status(400).json({ message: "No roles" });
        
        for (let i=0; i<req.body.roles.length; i++) {
            if (!roles_nombres.includes(req.body.roles[i])) {
                return res.status(400).json({message: `Role ${req.body.roles[i]} does not exist.`});
            }
        }
        next();
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}