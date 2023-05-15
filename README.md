# App

Gympass style app.

## RFs - Requisitos Funcionais

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histório de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10 km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;


## RNs - Regras de Negócio

- [x] o usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] o usuário não pode fazer 2 check-ins no mesmo dia;
- [x] o usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] o check-in só pode ser validade até 20 minutos após criado;
- [x] o check-in só pode ser validado por administradores;
- [x] a academia só pode ser cadastrada por administradores;

## RNFs - Requisitos Não Funcionais

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por JWT (JSON Web Token);
