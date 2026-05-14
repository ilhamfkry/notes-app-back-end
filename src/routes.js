import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from './controller.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: createNote,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotes,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteById,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

export default routes;