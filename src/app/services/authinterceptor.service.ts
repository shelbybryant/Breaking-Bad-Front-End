import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticationService } from "./authentication-service.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    //Import the AuthenticationService and inject inside the constructor
    constructor(private authenticationService: AuthenticationService) { }

    /*
    * call the getToken() method to get the JWT token 
    * within the req.clone method set the Authorization header and call the next.handle() method.
    */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authenticationService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
