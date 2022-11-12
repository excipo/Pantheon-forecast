export function weatherCodeConvertor(code: number): string {
    switch (code) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Partly cloudy";
        case 3:
            return "Overcast";
        case 45:
            return "Fog";
        case 48:
            return "Depositing rime fog";
        case 51:
            return "Drizzle ";
        case 53:
            return "Drizzle ";
        case 55:
            return "Drizzle ";
        case 56:
            return "Freezing drizzle";
        case 57:
            return "Freezing drizzle";
        case 61:
            return "Rain";
        case 63:
            return "Rain";
        case 65:
            return "Rain";
        case 66:
            return "Freezing rain";
        case 67:
            return "Freezing rain";
        case 71:
            return "Rain";
        case 73:
            return "Rain";
        case 75:
            return "Rain";
        case 77:
            return "Rain";
        case 80:
            return "Rain";
        case 81:
            return "Rain";
        case 82:
            return "Rain";
        case 85:
            return "Snowing";
        case 86:
            return "Snowing";
        case 95:
            return "Thunderstorm";
        case 96:
            return "Thunderstorm";
        case 99:
            return "Thunderstorm";
    }
    return "";
}