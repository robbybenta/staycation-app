const express = require('express')
const { comparePassword } = require('../helpers/bcrypt')
const { user } = require('../models')


class Controller {
    static register(req, res) {
        res.render('register.ejs')
    }
    static login(req, res) {
        res.render('login.ejs')
    }

    static registerAdd(req, res) {
        // console.log('hai')
        const dataUser = {
           ...req.body,
           phone_number:Number(req.body.phone_number)
        }
        user.create(dataUser)
            .then((data) => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err)
                res.send(err.message)
            })
    }
    static loginSuccess(req,res){
        user.findOne({where:{email:req.body.email}})
        .then((data)=>{
        //    if(data.password===comparePassword()req.body.password){

        //    }
        if(comparePassword(req.body.password,data.password)){
            // res.send('benar')
            res.render('home.ejs',{data:true})
        }
        else{
            res.render('error.ejs')
        }
        })
        .catch((err)=>{
            res.send(err.message)
        })
    }
    static logout(req,res){
         req.session.destroy()
         res.render('home.ejs', {data:true})
    }
}


module.exports = Controller