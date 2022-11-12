'use client'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@ui/Base'
import { Modal } from '@ui/Headless'
import { Input } from '@ui/Input'
import { useState } from 'react'

export default function MyModal() {
    const [open, setopen] = useState(false)
    return (
        <>
            <Button styleas="outline" onClick={() => setopen(true)}>
                <ExclamationCircleIcon className="h-4 w-4" /> Open Modal
            </Button>
            <Modal open={open} setOpen={setopen}>
                <h2 className="text-2xl my-6">Agregue su nuevo proyecto</h2>
                <Input name={'Nuevo Proyecto'} />
                <Button styleas="primary">Guardar</Button>
            </Modal>
        </>
    )
}
