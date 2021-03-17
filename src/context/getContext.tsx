import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    title: string;
    children: React.ReactNode;
};
export function createCtx<StateType, ActionType>(
    reducer: React.Reducer<StateType, ActionType>,
    initialState: StateType
) {
    const defaultDispatch: React.Dispatch<ActionType> = () => initialState; // we never actually use this

    const ctx = React.createContext({
        state: initialState,
        dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optional
    });

    const Provider: React.FC<Props> = ({ children }) => {
        const [state, dispatch] = React.useReducer<
            React.Reducer<StateType, ActionType>
        >(reducer, initialState);
        return (
            <ctx.Provider value={{ state, dispatch }}>{children}</ctx.Provider>
        );
    };

    Provider.propTypes = { children: PropTypes.element.isRequired };

    return [ctx, Provider] as const;
}
