let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js02js9'       ,
    next: '8nlksjsk'
};

//Number are coerced to String
dictionary['0'] = item;