import {inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Auth, user} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private auth: Auth = inject(Auth);
    private router: Router = inject(Router);
    private user$ = user(this.auth);

    canActivate(): Observable<boolean> {
        const currentRoute = this.router.routerState.snapshot.url;
        const currentRouteIsLogin = currentRoute === '/';

        return this.user$.pipe(
            map((user) => {
                if (user) {
                    return true;
                } else if (user && currentRouteIsLogin) {
                    this.router.navigate(['/myforms']);
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            })
        );
    }
}