export class InvalidCredentialsError extends Error {
  constructor() {
    super('Não foi possível efetuar a autenticação, credenciais inválidas')
  }
}