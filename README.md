# vehicles-api

Início do projeto instalando dependênias:
- Express, Multer, Prisma

Logo em seguida, criei uma imagem no Docker para hospedar o banco de dados MySQL.


===== CREATE =====> "/vehicles/create"<br/>
Rota de cadastro do veículo foi criada, com população do banco relacionando a tabela Veículo e Imagens. Na rota há a importação e conversão das imagens para binário e envio junto com o corpo ao Controller. 
No Controller é feita a conversão dos dados para seus respectivos tipos. Em seguida a solicitação da criação do veículo para a camada Model. Após criado, o id é capturado e enviado juntamente às imagens para a camada Model das imagens, onde são inseridas no banco, com o relacionamento com o respectivo veículo.
Abaixo a imagem das duas tabelas com dados fictícios:<br/>

![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/f9af6918-53c1-4d2f-97ba-a8e80096f0e2)
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/d2822914-5f52-4b6a-abda-b99d4fdf59d2)

Abaixo a imagem do Postman com a requisição feita e retorno após cadastrar os dados.<br/>

![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/d6183a2c-2ef8-4a12-beaf-47b8fef7a71f)

===== DELETE =====>  "/vehicles/delete/id"<br/>
Rota de exclusão criada, buscando o parâmetro (id) da url e enviando para o Controller. Na camada Controller, o id é enviado para a camada Model de exclusão das fotos, de forma que exclua todas as fotos que possuem o campo "veiculoId" igual ao id recebido. Logo em seguida, o Controller envia o mesmo id para a camada Model de exclusão do veículo e assim o faz através do próprio id do veículo.

Print do Postman ao executar o comando para excluir:<br/>
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/bc3a54ba-0454-4e43-9ba6-ea0224de71bf)

Prints do prisma studio antes e depois da exclusão:<br/>
Imagens:<br/>
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/f9494f65-ee3d-476d-830b-4d6b53e4da96)
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/f37ad2a3-d9af-4242-912c-d957462a1457)

Veículos:<br/>
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/53668970-7c97-4dae-a35d-5fa809744e17)
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/3132d11c-52a2-4d1a-8c60-085c096cbe4b)

===== GETALL =====>  "/vehicles"<br/>
Rota de obtenção de todos os resultados. Veículos e suas respectivas imagens:<br/>
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/7fbc65ce-83ce-475d-8c1c-115da5a2cd64)


===== GET UNIQUE =====>  "/vehicles/:id"<br/>
Rota de obtenção de um veículo específico, com suas respectivas images através de seu id.
O id é enviado como parâmetro na rota, passa pela camada Controller e é enviado à camada Model, onde faz a busca no banco de dados do veículo de acordo com sua id.
![image](https://github.com/marcoscl84/vehicles-api/assets/66912112/7a56b68b-296e-49af-b3ef-a55ddbb5f9ad)

