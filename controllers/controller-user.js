const express = require('express')
const { comparePassword } = require('../helpers/bcrypt')
const { hotel, user, order_detail } = require('../models')


class Controller {
    static register(req, res) {
        res.render('register.ejs')
    }
    static login(req, res) {
        res.render('login.ejs')
    }

    static registerAdd(req, res) {
        const dataUser = {
            ...req.body,
            phone_number: Number(req.body.phone_number)
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
    static loginSuccess(req, res) {
        user.findOne({ where: { email: req.body.email } })
            .then((data) => {
                if (comparePassword(req.body.password, data.password)) {
                    res.render('home.ejs', { data: true })
                    res.redirect('/')
                }
                else {
                    res.render('error.ejs')
                }
            })
            .catch((err) => {
                res.send(err.message)
            })
    }
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
    static showVisitors(req, res) {
        hotel.findByPk(req.params.id, { include: user })
            .then((data) => {
                res.render('show-visitors.ejs', { data: data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static showMember(req, res) {
        user.findAll()
            .then((data) => {
                res.render('member.ejs', { data: data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static showHotel(req, res) {
        user.findByPk(req.params.id, { include: hotel })
            .then((data) => {
                res.render('member-hotel.ejs', { data: data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}


module.exports = Controller