const zodiac = document.getElementById("zodiac");

const background = document.body;

const changeBackground = () => {
    switch(zodiac.value) {

        case "aries":
            background.style.backgroundColor = "#DF00FF";
            break;

        case "taurus":
            background.style.backgroundColor = "#0D9494";
            break;

        case "gemini":
            background.style.backgroundColor = "#FFDDAA";
            break;

        case "cancer":
            background.style.backgroundColor = "#FFFFEE";
            break;

        case "leo":
            background.style.backgroundColor = "#4D5D53";
            break;

        case "virgo":
            background.style.backgroundColor = "#801818";
            break;

        case "libra":
            background.style.backgroundColor = "#4A9976";
            break;

        case "scorpio":
            background.style.backgroundColor = " #8FBABC";
            break;

        case "sagittarius":
            background.style.backgroundColor = "#E48400";
            break;

        case "capricorn":
            background.style.backgroundColor = " #738678";
            break;

        case "aquarius":
            background.style.backgroundColor = "#E49B0F";
            break;

        case "pisces":
            background.style.backgroundColor = "#42B3AE";
            break;

        default:
            background.style.backgroundColor = "white";
            break;

    }
};