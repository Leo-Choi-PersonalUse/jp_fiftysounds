export type State = {
    displayNavigation: boolean
    themeMode: "dark" | "light"
    activeSelections: ActiveSelections
}

interface ActiveSelections {
    [key: string]: boolean;
}

export enum ActionType {
    UPDATE = "UPDATE"
}

type UpdateAction = {
    type: ActionType.UPDATE
    field: string
    value: any
}

export type Action = UpdateAction

export const initState: State = {
    displayNavigation: true,
    themeMode: "dark",
    activeSelections: {
        "hiraganaSeion": true,
        "hiraganaDakuon": false,
        "hiraganaHandakuon": false,
        "hiraganaYoon": false,
        "katakanaSeion": false,
        "katakanaDakuon": false,
        "katakanaHandakuon": false,
        "katakanaYoon": false,
    }
}

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionType.UPDATE:
            return { ...state, [action.field]: action.value }
        default: throw new Error()
    }
    
}