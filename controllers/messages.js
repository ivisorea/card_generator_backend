import db from '../db/client.js';
import dotenv from 'dotenv';
import asyncHandler from '../middlewares/asyncHandler.js';
dotenv.config();

export const getAllMessages = asyncHandler(async (req, res, next) => {
    const {rowCount, rows} = await db.query('SELECT * FROM messages');
    res.json(rows);
});

export const getMessageById = asyncHandler(async (req, res, next) => {
    const {
        params: {id}
    } = req;
    const {rowCount, rows} = await db.query('SELECT * FROM messages WHERE id = $1', [id]);
    if (!rowCount) {
        return next(new Error('Message not found'));
    }
    res.json(rows);
});
