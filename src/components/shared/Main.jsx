import { useState } from 'react'

function Main({ children }) {

    return (
        <>
            <aside>
                <a href="/list">List</a>
                <a href="/create">Create</a>
            </aside>
            <main>
                {children}
            </main>
        </>
    )
}

export default Main
