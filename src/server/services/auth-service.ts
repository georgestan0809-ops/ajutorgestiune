import type { AuthService } from "@/src/core/contracts/services";

export class DefaultAuthService implements AuthService {
  async getSessionUser() {
    return null;
  }
}
