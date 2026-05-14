import express from 'express';
import { createNote, deleteNoteById, editNoteById, getNotes, getNoteById } from './controller.js';

const router = express.Router();
router.post('/notes', createNote);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNoteById);
router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);

export default router;