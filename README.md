﻿# vehicles-api

Início do projeto instalando dependênias:
- Express, Multer, Prisma

Logo em seguida, criei uma imagem no Docker para hospedar o banco de dados MySQL.

Rota de cadastro do veículo foi criada, com população do banco relacionando a tabela Veículo e Imagens. Na rota há a importação e conversão das imagens para binário e envio junto com o corpo ao Controller. 
No Controller é feita a conversão dos dados para seus respectivos tipos. Em seguida a solicitação da criação do veículo para a camada Model. Após criado, o id é capturado e enviado juntamente às imagens para a camada Model das imagens, onde são inseridas no banco, com o relacionamento com o respectivo veículo.
Abaixo a imagem das duas tabelas com dados fictícios:

![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/f9af6918-53c1-4d2f-97ba-a8e80096f0e2)
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/d2822914-5f52-4b6a-abda-b99d4fdf59d2)

Abaixo a imagem do Postman com a requisição feita e retorno após cadastrar os dados.

![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/d6183a2c-2ef8-4a12-beaf-47b8fef7a71f)
