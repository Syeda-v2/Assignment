import "express-session";

declare module "express-session" {
    interface SessionData {
        user?: {
            id: number;
            name: string;
            email: string;
            password?: string;
        }
    }
}

declare global {
    namespace Express {
        interface Request {
            flash(type: string, message: string): void;
            flash(type: string): string[];
        }
    }
}