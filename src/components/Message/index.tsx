import { MessageButton, MessageContainer } from './styles'

interface IProps {
  text: string
  image: string
  buttonName: string
  handleClick: () => void
}

export function Message({ text, image, buttonName, handleClick }: IProps) {
  return (
    <MessageContainer>
      <p>{text}</p>
      <img src={image} alt="" />
      <MessageButton onClick={() => handleClick()}>{buttonName}</MessageButton>
    </MessageContainer>
  )
}
