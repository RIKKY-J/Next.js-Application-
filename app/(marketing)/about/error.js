"use client";

export default function Error({error, reset}) {
    const { reset } = useResetError();

    return (
        <>
            <h1>Something went wrong!</h1>
            <button
                onClick={() => {
                    reset();
                }}
            >
                Try again
            </button>
        </>
    );
}