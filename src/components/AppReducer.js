export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state;
        case "rate": {
            const updatedProfiles = state.profiles.map(profile =>
                profile.id === action.payload.id ? { ...profile, rating: action.payload.rating } : profile
            );
            return { ...state, profiles: updatedProfiles };
        }
        case "delete": {
            const updatedProfiles = state.profiles.filter(profile => profile.id !== action.payload.id);
            return { ...state, profiles: updatedProfiles };
        }
        default:
            return state;
    }
}