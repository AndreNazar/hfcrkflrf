const en_letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 
'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
'z', 'x', 'c', 'v', 'b', 'n', 'm',
'`', '~',
'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}',
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
'Z', 'X', 'C', 'V', 'B', 'N', 'M',
'#'
]

const ru_letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 
'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д',
'я', 'ч', 'с', 'м', 'и', 'т', 'ь',
'ё', 'Ё',
'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 
'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь',
'№'
]

const getLanguage = (word: string, index: number) => {

    const prevLetter = word[index-1]

    if(index-1 < 0) return "none"

    if (en_letters.includes(prevLetter)) return "en"
    else if (ru_letters.includes(prevLetter)) return "ru"
    else return getLanguage(word, index-1)
}


const getTranslate = (word: string, letter: string, index: number) : string => {

    const isRu = getLanguage(word, index) == "ru"
    const isEn = getLanguage(word, index) == "en"

    if (en_letters.includes(letter)) return ru_letters[en_letters.indexOf(letter)]
    else if (ru_letters.includes(letter)) return en_letters[ru_letters.indexOf(letter)]
    else if (letter == '/' && isRu) return "|"
    else if (letter == '|' && isEn) return "/"

    else if (letter == "\"" && isRu) return "@"
    else if (letter == "@" && isEn) return "\""

    else if (letter == ";" && isRu) return "$"
    else if (letter == "$" && isEn) return ";"

    else if (letter == ":" && isRu) return "^"
    else if (letter == "^" && isEn) return ":"

    else if (letter == "?" && isRu) return "&"
    else if (letter == "&" && isEn) return "?"

    else if (letter == ',' && isRu) return "?"
    else if (letter == '?' && isEn) return ","
    else if (letter == '.' && isRu) return "/"
    else if (letter == '/' && isEn) return "/"

    else if (letter == '.' && isEn) return "ю"
    else if (letter == '>' && isEn) return "Ю"
    else if (letter == ',' && isEn) return "б"
    else if (letter == '<' && isEn) return "Б"
    else if (letter == "'" && isEn) return "э"
    else if (letter == "\"" && isEn) return "Э"
    else if (letter == ";" && isEn) return "ж"
    else if (letter == ":" && isEn) return "Ж"

    else if (letter == 'ю') return "."
    else if (letter == 'Ю') return ">"
    else if (letter == 'б') return ","
    else if (letter == 'Б') return "<"
    else if (letter == "э") return "'"
    else if (letter == "Э") return "\""
    else if (letter == "ж") return ";"
    else if (letter == "Ж") return ":"
    else return letter
}

export default getTranslate