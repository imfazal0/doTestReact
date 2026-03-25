export function formatTotalTime(minutes) {
    if (!minutes) return '0h';
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hrs > 0) {
        return `${hrs}h`;
    }
    return '<1h';
}
