import type { ComponentResolver } from '../../types'

export function NutUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      console.log(name)
      if (name.startsWith('Nut') || name.startsWith('nut')) {
        const partialName = name.slice(3)
        // [as]: typeof import([from])[name]
        return {
          name: partialName,
          from: `@nutui/nutui`,
          sideEffects: `@nutui/nutui/dist/packages/${partialName.toLowerCase()}/index.scss`
        }
      }
    }
  }
}

