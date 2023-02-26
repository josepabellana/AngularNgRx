import { createAction,props } from '@ngrx/store';
import { Contact } from '../types/contact.interface';

export const addContact = createAction(
    '[Contact] Add Contact',
    props<{ contact:Contact }>()
);
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
