"use client";
import { useState, useEffect, startTransition } from "react";
import router from "next/router";

export default function Error({error, reset}) {

    return (
        <>
            <h1>Something went wrong!</h1>
            <button
                onClick={() => {
                    startTransition(() => {
                        router.refresh();
                        reset();
                    });
                }}
            >
                Try again
            </button>
        </>
    );
}