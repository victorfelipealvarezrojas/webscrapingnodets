#  API info

Para correr localmente, se necesita la base de datos.
```
docker-compose up -d
```


* Reconstruir los módulos de node y levantar
```
npm install
npm start
```

## Llenar la base de datos con información de pruebas

Llamara:
```
http://localhost:4001/api/nomina/seed
```