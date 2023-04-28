import { WantedItemType } from '../../pages/calculatorPage/calculatorPage.options'

export type InputType = {
  value: WantedItemType,
  onChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void,
  id: string,
  name: string
}