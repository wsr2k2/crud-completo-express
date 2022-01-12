# crud-completo-express
Projeto de uma API utilizando o NodeJs e Express. Realizado um CRUD completo em tempo de execução, sem salvar em banco de dados.

Na rota FILMES foi utilizado verificação de entrada de dados, caso o usuário deixe de preencher algum dos campos que nessa rota estão como obrigatórios.

Na rota GAMES não foi implementado nenhum tipo de verifcação dos dados, logo, caso não seja preenchido algum campo, o mesmo será salvo em branco.

Lembrando que esse CRUD com EXPRESS está sendo salvo os dados apenas em tempo de execução, ou seja, toda vez que se iniciar a aplicação, todos os dados inseridos anteriormente, não irão mais aparecer.

Foi criado uma lista com 2 FILMES e uma lista com 2 GAMES para efeito de modelo.