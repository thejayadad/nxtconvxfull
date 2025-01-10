'use client'
import { api } from '@/convex/_generated/api';
import { Doc, Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import ActionItem from './item';
import { FiFile } from 'react-icons/fi';

interface Props {
    documentId?: Id<"documents">;
    data?: Doc<"documents">[];
}

const DocumentList = ({documentId}: Props) => {
    const params = useParams()
    const router = useRouter() 
    const [expanded, setExpanded] = useState<Record<string, boolean>>({})
    const onExpand = (documentId: string) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [documentId]: !prevExpanded[documentId]
        }))
    }
    const documents = useQuery(api.documents.get);
    const onRedirect = (documentId: string) => {
        router.push(`/dashboard/${documentId}`)
    }
  return (
    <>
       {documents?.map((document) => (
        <div key={document._id}>
            <ActionItem
            id={document._id}
            onClick={() => onRedirect(document._id)}
            label={document.title} 
            icon={FiFile}
            documentIcon={document.icon}
            active={params.documentId === document._id}
           />
        </div>
       ))}
    </>
  )
}

export default DocumentList