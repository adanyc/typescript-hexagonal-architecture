import { AuthClient } from "./feature/authentication/infrastructure/auth-client";

const authClient = new AuthClient();
authClient.login('azure', { username: 'alex', password: '123456' });
