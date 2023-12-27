export const validateString = (string: unknown, maxLength: number) => {
    if (!string || typeof string !== 'string' || string.length > 500) {
        return false;
    }
    return true;
}

export const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message

    }
    else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message)
    }
    else if (typeof error === 'string') {
        message = error
    }
    else {
        message = 'Something went wrong';
    }
    return message;
}