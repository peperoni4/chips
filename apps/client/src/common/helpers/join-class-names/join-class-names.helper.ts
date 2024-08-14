const joinClassNames = (
    className: string,
    ...other: string[]
): string => {
    return className
        .split(' ')
        .filter(Boolean)
        .concat(other)
        .join(' ');
};
export { joinClassNames };
