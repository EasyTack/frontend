export const environment = {
  production: true
};

export class AppConfig {
  static get DESENVOLVIMENTO() {
      return 'dev';
  }
  static readonly BASE_URL = 'localhost:3000/';
}
