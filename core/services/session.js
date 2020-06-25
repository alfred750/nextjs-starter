import { request } from '../helpers';

/**
 * SignUp
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Promise<any>}
 */
const signUp = (data) => request({ url: '/authentication/signUp', data });

/**
 * SignIn
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.password
 * @returns {Promise<any>}
 */
const signIn = (data) => request({ url: '/authentication/signIn', data });

/**
 * Get Self
 * @returns {Promise<any>}
 */
const getSelf = () => request({ url: '/authentication/getSelf' });

const SessionServices = {
  signUp,
  signIn,
  getSelf,
};

export default SessionServices;
