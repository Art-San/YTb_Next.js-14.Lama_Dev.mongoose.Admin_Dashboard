import { ReactNode } from 'react'

export interface IMenuItem {
  title: string
  path: string
  icon: ReactNode // Можно использовать ReactNode для представления элементов React, таких как иконки
}

// export interface IMenu {
// 	title: string
// 	items: IMenuItem[]
// }
