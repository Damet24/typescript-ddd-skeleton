
import container, { LoadDependencies } from './dependencies'

function boostrap (): void {
  LoadDependencies()
    .then(() => {
      console.log(container)
    })
    .catch(console.error)
}
boostrap()
