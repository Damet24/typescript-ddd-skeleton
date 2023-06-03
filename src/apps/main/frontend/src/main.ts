import './style.css'
import { CreateUser, listUsers } from './services/UserService'

function createUserItem(id: string, name: string): HTMLElement {
  const el = document.createElement('article')
  el.classList.add('table-row')

  const p = document.createElement('p')
  const sp1 = document.createElement('span')
  sp1.classList.add('cell')
  sp1.innerHTML = '<strong>Id: </strong>' + id
  const sp2 = document.createElement('span')
  sp2.classList.add('cell')
  sp2.innerHTML = '<strong>Name: </strong>' + name
  p.appendChild(sp1)
  p.appendChild(sp2)

  el.appendChild(p)
  return el
}

function updateUsers() {
  const section = document.querySelector('#main-section')
  if (section != null) {
    section.innerHTML = ''
    listUsers()
      .then(data => {
        data.body.data.forEach(user => {
          document.querySelector('#main-section')?.appendChild(createUserItem(user.id, user.name))
        })
      })
  }
}

const form = document.querySelector<HTMLFormElement>('#main-form')
if (form != null) {
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name') as string
    CreateUser(name)
      .then(() => {
        updateUsers()
      })
      .catch(err => alert(JSON.parse(err)))
  })
}

updateUsers()