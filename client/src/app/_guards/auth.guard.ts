import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({ providedIn: 'root' })
export class AuthGuard {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user) return true;
        else {
          this.toastr.error('You shall not pass!');
          return false
        }
      })
    );
  }
}