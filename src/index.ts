import { AuthClient } from "./feature/authentication/infrastructure/auth-client";

const authClient = new AuthClient();
authClient.login('alex','123456');
