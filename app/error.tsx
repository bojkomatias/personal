'use client'

import { Button, Container } from '@ui/Base'
import { Disclosure } from '@ui/Headless'
import { useEffect } from 'react'

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Container>
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-red-600">
                        Error
                    </h2>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                        An unexpected error has ocurred
                    </p>

                    <div className="mx-auto items-center flex flex-col">
                        <Button onClick={reset}>Retry</Button>
                        <Button href="/">Go to home</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
