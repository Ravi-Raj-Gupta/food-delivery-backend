import jwt from 'jsonwebtoken';

export const authMiddleware = async (req, res, next) => {
   try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
         return res.status(401).send({
            success: false,
            message: "No token provided"
         });
      }

      const token = authHeader.split(" ")[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ FIX HERE
      req.user = { id: decode.id };

      next();

   } catch (error) {
      console.log(error);
      res.status(401).send({
         success: false,
         message: "Unauthorized user",
         error
      });
   }
};