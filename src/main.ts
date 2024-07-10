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

const textareaHundler = (input: HTMLTextAreaElement, output: HTMLTextAreaElement) => {

  resizeFont()
  
  output.value = ''
  
  for (let i = 0; i < input.value.length; i++) 
  output.value += getTranslate(input.value, input.value[i], i)
}

text_input.addEventListener('input', () => textareaHundler(text_input, text_output))

text_output.addEventListener('input', () => textareaHundler(text_output, text_input))