# Koristimo Node.js za build aplikacije
FROM node:18 AS build

# Postavljamo radni direktorij
WORKDIR /app

# Kopiramo package.json i package-lock.json
COPY package*.json ./

# Instaliramo potrebne pakete
RUN npm install

# Kopiramo ostatak aplikacije
COPY . .

# Izgradnja aplikacije
RUN npm run build --prod

# Koristimo nginx za serviranje statičkih fajlova
FROM nginx:alpine

# Kopiramo build output u nginx direktorij
COPY --from=build /app/docs/browser /usr/share/nginx/html

# Eksponiramo port 80
EXPOSE 80

# Pokrećemo nginx
CMD ["nginx", "-g", "daemon off;"]
