export function getTimeDifference(message) {
    const currentTime = new Date();
    const messageTime = new Date(message.timestamp);
    const difference = currentTime - messageTime;
    const intervals = [
        { label: 'minute', duration: 60 * 1000 },
        { label: 'hour', duration: 60 * 60 * 1000 },
        { label: 'day', duration: 24 * 60 * 60 * 1000 },
        { label: 'week', duration: 7 * 24 * 60 * 60 * 1000 },
        { label: 'month', duration: 30 * 24 * 60 * 60 * 1000 },
        { label: 'year', duration: 365 * 24 * 60 * 60 * 1000 }
    ];

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const numIntervals = Math.floor(difference / interval.duration);

        if (numIntervals === 0) {
            return 'Just now';
        } else if (numIntervals === 1) {
            return `1 ${interval.label} ago`;
        } else if (numIntervals === 2) {
            return `2 ${interval.label}s ago`;
        } else if (numIntervals < 24) {
            return `${numIntervals} ${interval.label}s ago`;
        }
    }

    return 'Long time ago';
};

