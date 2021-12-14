import { Main } from 'types/main'

const a = (test: Main): void => {
  console.dir(test)
}

a({ hello: 'world' })
