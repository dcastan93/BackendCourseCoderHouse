import { Router } from "express";
import { userModel } from "../models/users.models";

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    let users = await userModel.find()
    res.send({ results: 'success', playload: users })
  } catch (error) {
    console.log('no se pueden traer los usuarios desde mongose' + error)
  }
})