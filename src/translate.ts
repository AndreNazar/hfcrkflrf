const en_letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 
'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 
'`', '~',
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M',
'@', '#', '$', '^', '&',
]

const ru_letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 
'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 
'ё', 'Ё',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь',
'"', '№', ';', ':', '?',
]


const getTranslate = (letter: string) : string => {
    if (en_letters.includes(letter)) return ru_letters[en_letters.indexOf(letter)]
    else if (ru_letters.includes(letter)) return en_letters[ru_letters.indexOf(letter)]
    else return letter
}

export default getTranslate