'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshorturl("")
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                console.log(result)
                alert(result.message)
            }).catch((error) => {
                console.error(error)
                alert(result.message)
            });
    }

    return (
        <div className='mx-4 md:mx-auto my-8 max-w-lg bg-purple-100 rounded-lg p-8 flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-4'>
                <input value={url} type="text" placeholder='Enter your URL' onChange={(e) => seturl(e.target.value)} className='px-4 py-2 rounded-md bg-white focus:outline-purple-600' />
                <input value={shorturl} type="text" placeholder='Enter your preferred short URL text' onChange={(e) => setshorturl(e.target.value)} className='px-4 py-2 rounded-md bg-white focus:outline-purple-600' />
                <button onClick={generate} className='px-4 py-2 rounded-lg shadow-md font-bold bg-purple-500 hover:bg-purple-700 my-3 text-white'>Generate</button>
            </div>
            {generated && <>
                <span className='font-bold'>Your Link: </span>
            <code>
                <Link className='text-purple-500' target='_blank' href={generated}>{generated}</Link>
            </code>
            </>}
        </div>
    )
}

export default Shorten
