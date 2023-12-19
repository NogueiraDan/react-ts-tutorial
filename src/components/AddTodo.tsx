import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context/useTodo'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Tarefa inserida com sucesso!')
    } else {
      toast.error('A tarefa não pode ser vazia!')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
          <Input
            ref={inputRef}
            type="text"
            placeholder="start typing ..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
