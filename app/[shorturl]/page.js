import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = await params
  // console.log(params.shorturl)
  const client = await clientPromise
  const db = client.db('bitlinks')
  const collection = db.collection('url')

  let doc = await collection.findOne({ shorturl: shorturl })
  // console.log(doc)
  // console.log(doc.url)
  if (doc) {
    redirect(doc.url)
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
}