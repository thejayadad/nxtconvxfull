'use client'
import {useEffect, useState} from "react"
import {FiFile} from "react-icons/fi"
import { useQuery } from "convex/react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { api } from "@/convex/_generated/api"


const SeacrhCommand = () => {
    const {user} = useUser()
    const router = useRouter()
    const documents= useQuery(api.documents.getSearch)
  return (
    <div>SeacrCommand</div>
  )
}

export default SeacrhCommand