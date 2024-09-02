import {inject, Injectable, Signal} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, user, User} from '@angular/fire/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {Router} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  private router: Router = inject(Router)
  public user: Signal<User | undefined | null> = toSignal(user(this.auth));

  constructor(private dialog: MatDialog) {}

  public async loginWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider())
        .then(response => {
          if (response.user) {
            this.dialog.closeAll();
            this.router.navigate(['/myforms']);
          } else {
            console.error('Login failed');
          }
        })
  }

  async signup(name: string, surname: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(this.firestore, 'users'), {
        id: user.uid,
        email,
        name,
        surname
      });

      this.dialog.closeAll();
      this.router.navigate(["/myforms"]);
      return user;
    } catch (error) {
      console.error('Signup error:', error);
      return of(null);
    }
  }

  public async logout() {
    await this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}