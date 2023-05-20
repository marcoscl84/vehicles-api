import multer, { MulterError } from "multer";
import { Request, Response, NextFunction } from "express";

export const handleMulterError = (
  err: MulterError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
    res.status(400).json({
      error: "Maximum images allowed is 5",
    });
  } else {
    next(err);
  }
};
