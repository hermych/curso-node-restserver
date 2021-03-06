const Role  = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async( rol = '' ) => {

    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
            throw new Error(`El rol ${ rol } no esta registrado en la BD`)
    }
}

const emailExiste = async( correo = '') => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
        throw new Error(`El email: ${ correo } ya existe`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el id existe
    const existeUsuario = await Usuario.findById( id );
    if( !existeUsuario ){
        throw new Error(`No existe el usuario con id: ${id}`);
    }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}


