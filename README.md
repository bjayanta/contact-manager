### Install NestJS DB dependencies

```bash
$ yarn add @nestjs/typeorm typeorm pg
$ yarn add @nestjs/config
```

- Add environment variables into `.env`
- Add TypeORM configuration into `app.module.ts`
- Create user module
    - Create user entity
    - Create user service
    - Create user controller
    - Create user dto