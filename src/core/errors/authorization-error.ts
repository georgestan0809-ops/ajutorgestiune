import { AppError } from "@/src/core/errors/app-error";

export class AuthorizationError extends AppError {
  constructor(message = "You are not allowed to perform this action.") {
    super(message, "AUTHORIZATION_ERROR", 403);
  }
}
