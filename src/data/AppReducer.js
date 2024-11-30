export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            const updatedItems = state.map(item =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload }
                    : item
            );
            return updatedItems;

        case "rate": {
            const updatedItems = (state).map(item =>
                item.id === action.payload.id
                    ? { ...item, ratingStars: action.payload.rating }
                    : item
            );
            return updatedItems;
        }

        case "delete": {
            const updatedItems = state.filter(item => item.id !== action.payload.id);
            return updatedItems;
            
        }

        case "add": {
            console.log("Adding item:", action.payload);
            return [...state, { ...action.payload, id: state.length + 1 }];
        }

        default:
            return state;
    }
}
