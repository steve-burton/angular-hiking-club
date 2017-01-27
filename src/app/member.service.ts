import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {

  constructor() { }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('/members/' + memberId);
  }

}
