# Projeto Backend NodeJS

Desenvolver um app NodeJS (usando Typescript) com as seguintes libs:

-   axios
-   dotenv
-   eslint
-   express
-   jest
-   nodemon
-   pg
-   swagger-ui-express
-   typescript

Banco de dados: PostgreSQL

## Fase 1

Implementar um CRUD de funcionários e departamentos. Um funcionário pertence a um único departamento, e um departamento pode ter 0 ou mais funcionários. Um funcionário tem zero ou um funcionário acima (gerente), e um funcionário pode ter 0 ou mais funcionários abaixo. Fique livre para definir as informações que cada entidade (funcionário / departamento) deve possuir, como nome, e-mail, seção, etc...

Para cada entidade, criar APIs para Create, Read, Update, Delete. As APIs devem seguir os padrão Restful, e devem ser documentadas (Swagger).

Boas práticas para escrita das APIs: https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

As APIs não precisam ser seguras e nem versionadas. As APIs de GET (funcionários e departamentos) devem permitir paginação, filtro e ordenação.

A aplicação deve rodar em container Docker, assim como o banco PostgreSQL.

## Fase 2
