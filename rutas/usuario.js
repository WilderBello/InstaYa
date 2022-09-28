const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    // nombre:String,
    email:String,
    // telefono:String,
    idusuario:String,
    fecha:String,
    hora:String,
    estado:String,
    largo:Number,
    alto:Number,
    ancho:Number,
    peso:String,
    direccion_recogida:String,
    ciudad_recogida:String,
    nombre_destinatario:String,
    cedula_destinatario:Number,
    direccion_entrega:String,
    ciudad_entrega:String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*router.get('/ejemplo',(req,res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar usuario
router.post('/agregarusuario',(req,res)=>{
    const nuevousuario = new ModeloUsuario({
        // nombre:req.body.nombre,
        email:req.body.email,
        // telefono:req.body.telefono,
        idusuario:req.body.idusuario,
        fecha:req.body.fecha,
        hora:req.body.hora,
        estado:req.body.estado,
        largo:req.body.largo,
        alto:req.body.alto,
        ancho:req.body.ancho,
        peso:req.body.peso,
        direccion_recogida:req.body.direccion_recogida,
        ciudad_recogida:req.body.ciudad_recogida,
        nombre_destinatario:req.body.nombre_destinatario,
        cedula_destinatario:req.body.cedula_destinatario,
        direccion_entrega:req.body.direccion_entrega,
        ciudad_entrega:req.body.ciudad_entrega
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send("Envio agregado correctamente")
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los usuarios
router.get('/obtenerusuarios',(req,res)=>{
    ModeloUsuario.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario
router.post('/obtenerdatausuario',(req,res)=>{
    ModeloUsuario.find({idusuario:req.body.idusuario},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//actualizar usuario
router.post('/actualizausuario',(req,res)=>{
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario},{
        // nombre:req.body.nombre,
        email:req.body.email,
        // telefono:req.body.telefono,
        fecha:req.body.fecha,
        hora:req.body.hora,
        estado:req.body.estado,
        largo:req.body.largo,
        alto:req.body.alto,
        ancho:req.body.ancho,
        peso:req.body.peso,
        direccion_recogida:req.body.direccion_recogida,
        ciudad_recogida:req.body.ciudad_recogida,
        nombre_destinatario:req.body.nombre_destinatario,
        cedula_destinatario:req.body.cedula_destinatario,
        direccion_entrega:req.body.direccion_entrega,
        ciudad_entrega:req.body.ciudad_entrega
    },(err) => {
        if(!err){
            res.send('Envio actualizado correctamente')
        }else{
            res.send(err)
        }
    })
    
})

//borrar usuario
router.post('/borrarusuario',(req,res)=>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario},(err) => {
        if(!err){
            res.send('Envio borrado correctamente')
        }else{
            res.send(err)
        }
    })
    
})
