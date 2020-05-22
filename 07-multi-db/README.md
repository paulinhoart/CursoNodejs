docker ps //os servicos redodando
docker run \
    --name postgres \
    -e POSTGRES_USER=paulodasilva \
    -e POSTGRES_PASSWORD=242728 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432
    -d  //roda em segundo plano
    postgres

//acessando o bash
docker exec -it postgres /bin/bash

// administrar banco interface
docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

----MONGODB
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4

//client mongodb
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient


docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'paulodasilva', pwd:'admin', roles:[{role: 'readWrite', db: 'herois'}]})"



----SUBIR AS IMAGENS PARA DOCKER HUB
docker tag mongodb paulinhoart/mongodb