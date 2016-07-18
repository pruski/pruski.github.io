import humanizeDuration from 'humanize-duration';

const yearInMiliseconds = 31536000000;

export const formatDuration = dateTime => {
    const duration = Date.now() - (new Date(dateTime)).valueOf();
    
    return humanizeDuration(duration, {
        largest: duration > yearInMiliseconds ? 2 : 1,
        delimiter: ' '
    })
};