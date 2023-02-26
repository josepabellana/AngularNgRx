import { createReducer, on } from '@ngrx/store';
import * as ContactActions from './contact.actions';
import { ContactStateInterface } from '../types/contactState.interface';

export const initialState:ContactStateInterface = {
  contacts: []
};

export const contactReducer = createReducer(
  initialState,
  on(ContactActions.addContact, (state, {contact}) => ({
    contacts:[...state.contacts, contact]
  }) ),
  on(ContactActions.decrement, (state) => state),
  on(ContactActions.reset, (state) => state)
);

