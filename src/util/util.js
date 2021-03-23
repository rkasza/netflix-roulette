// Need to copy array because array.sort does inplace array sorting and the state will update after every second state change
export const arraySortFactory = compareFunc => arr => [...arr].sort(compareFunc);
