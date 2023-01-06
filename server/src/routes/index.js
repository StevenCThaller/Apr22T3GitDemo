import { Router } from "express";
import heroesRoutes from "./heroes";
import villainsRoutes from "./villains";

const apiRoutes = Router();

apiRoutes.use("/heroes", heroesRoutes);
apiRoutes.use("/villains", villainsRoutes);

export default apiRoutes;
