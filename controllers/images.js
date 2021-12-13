import db from '../db/client.js';
import dotenv from 'dotenv';
import asyncHandler from '../middlewares/asyncHandler.js';
dotenv.config();

export const getAllImages = asyncHandler(async (req,res,next) => {
    const {rowCount, rows} = await db.query('SELECT * FROM images');
    res.json(rows);
});

export const getImage = asyncHandler(async (req,res,next) => {
    const {
        params: {id},
    } = req;
    const {rowCount, rows} = await db.query('SELECT * FROM images WHERE id = $1', [id]);
    if (!rowCount) throw new Error('Image not found');
    res.json(rows);
});

