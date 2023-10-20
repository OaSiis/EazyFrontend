
export const arrayToObject = <T extends { [key: string]: any }>(array: T[], key: keyof T): Record<string, T> => {
    return array.reduce((acc: Record<string, T>, value) => {
        acc[value[key]] = value;

        return acc;
    }, {})
}