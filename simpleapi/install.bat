docker run -ti --rm ^
    -v %cd%:/app/ ^
    -w /app/ ^
    node:8 npm install