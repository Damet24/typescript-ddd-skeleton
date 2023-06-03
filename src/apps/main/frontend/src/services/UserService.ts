import { type User } from "../types"

const baseUrl = 'http://localhost:3000/user'

type UserResponse = {body: {data: User[]}}

export async function listUsers (): Promise<UserResponse> {
  const res = await fetch(baseUrl)
  return  res.json() as  Promise<UserResponse>
}

export async function CreateUser(name: string): Promise<void> {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({name})
  })

  if (!res.ok) throw new Error('')
}