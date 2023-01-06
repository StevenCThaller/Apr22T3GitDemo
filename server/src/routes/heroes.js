import { Router } from "express";
import Hero from "../models/hero";

const heroesRoutes = Router();

heroesRoutes
  .route("/")
  .get((req, res) => {
    Hero.find()
      .then((heroes) => res.json(heroes))
      .catch((err) => res.sendStatus(500));
  })
  .post((req, res) => {
    Hero.create(req.body)
      .then((hero) => res.json(hero))
      .catch((err) => res.status(422).json(err.errors ? err.errors : err));
  });

heroesRoutes
  .route("/:heroId")
  .get((req, res) => {
    Hero.findById(req.params.heroId)
      .then((hero) => res.json(hero))
      .catch((err) => res.sendStatus(500));
  })
  .put((req, res) => {
    Hero.findByIdAndUpdate(req.params.heroId, req.body, {
      new: true,
      runValidators: true,
    })
      .then((hero) => res.json(hero))
      .catch((err) => res.status(422).json(err.errors ? err.errors : err));
  })
  .delete((req, res) => {
    Hero.findByIdAndDelete(req.params.heroId)
      .then((_) => res.sendStatus(200))
      .catch((err) => res.sendStatus(400));
  });

export default heroesRoutes;
