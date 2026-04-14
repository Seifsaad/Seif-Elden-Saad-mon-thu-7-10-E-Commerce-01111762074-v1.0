"use client"
import { InputGroup, InputGroupAddon, InputGroupInput } from '_/components/ui/input-group'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSearch = () => {
        if(search.trim() === '') return
        router.push(`/products/productsSearchPage/${search}`)
        

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearch()
        }
    }

  return (
    <> 
    <InputGroup  className="w-full py-4">
          <InputGroupInput value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} id="inline-start-input"  placeholder="Search..." />
          <InputGroupAddon onClick={handleSearch} align="inline-end">
            <FaSearch className="text-green-600 text-2xl cursor-pointer" />
          </InputGroupAddon>
        </InputGroup>
    </>
  )
}