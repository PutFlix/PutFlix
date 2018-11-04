import { Action } from 'redux';

import { Actions as CheckAuthActions } from './auth';

export type Actions = CheckAuthActions;

/**
 * A function to bend TypeScripts inference to correctly infer action types.
 *
 * Does nothing with the action itself, it's just about the typings.
 *
 * @param ac the action to wrap
 */
export const wrapAction = <T extends string, A extends Action<T>>(ac: A): A => ac;
