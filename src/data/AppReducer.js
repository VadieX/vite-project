export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state;

        case "rate": {
            const updatedItems = (state.items).map(item =>
                item.id === action.payload.id
                    ? { ...item, rating: action.payload.rating }
                    : item
            );
            return { ...state, items: updatedItems };
        }

        case "delete": {
            const updatedItems = state.item.filter(item => item.id !== action.payload.id);
            console.log("aaa", updatedItems);
            return { ...state, items: updatedItems };
            
        }

        case "add": {
            return { ...state, items: [...state.items, action.payload] };
        }

        default:
            return state;
    }
}
