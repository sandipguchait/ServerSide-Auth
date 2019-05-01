import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = ({ email, password }) => async dispatch => {
    try{
        const response = await axios.post('/signup', { email, password })
        dispatch({
            type: AUTH_USER,
            payload: {
                token: response.data.token
            }
        });
        localStorage.setItem('token', response.data.token);

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                error: 'Email already in use'
            }
        })
    }
};

export const signIn = ({ email, password }) => async dispatch => {
    try{
        const response = await axios.post('/signin', { email, password })
        dispatch({
            type: AUTH_USER,
            payload: {
                token: response.data.token
            }
        });
        localStorage.setItem('token', response.data.token);

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                error: 'Inavalid Login Credentials'
            }
        })
    }
};

export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: {
            token: ''
        }
    }
};
