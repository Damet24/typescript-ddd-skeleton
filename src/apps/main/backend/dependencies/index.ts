import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
import path from 'node:path'

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)

export async function LoadDependencies (): Promise<void> {
  await loader.load(path.join(__dirname, 'main.yaml'))
}

export default container
