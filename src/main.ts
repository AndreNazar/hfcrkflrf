import './style.scss'
import getTranslate from './translate'

const text_input = document.querySelector('.text_input') as HTMLTextAreaElement
const text_output = document.querySelector('.text_output') as HTMLTextAreaElement

const newSize = (offset: number): number => {
  return Math.round(text_input.clientWidth/10) - (text_input.value.length * offset)
}


const resizeFont = () =>{
  let offset:number = 2
  
  if(newSize(offset) >= 16) text_input.style.fontSize = text_output.style.fontSize = `${newSize(offset)}px`
  else text_input.style.fontSize = text_output.style.fontSize = '16px'
}


text_input.addEventListener('input', () => {
  
  resizeFont()
  
  text_output.value = ''
  
  for (let i = 0; i < text_input.value.length; i++) {
    text_output.value += getTranslate(text_input.value[i])
  }
})

text_output.addEventListener('input', () => {

  resizeFont()

  text_input.value = ''
  
  for (let i = 0; i < text_output.value.length; i++) {
    text_input.value += getTranslate(text_output.value[i])
  }
})