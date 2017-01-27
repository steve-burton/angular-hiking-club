import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('/members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(updatedMember) {
    var memberEntryInFirebase = this.getMemberById(updatedMember.$key);
    memberEntryInFirebase.update({name: updatedMember.name,
                                  address: updatedMember.address,
                                  about: updatedMember.about,
                                  image: updatedMember.image,
                                  miles: updatedMember.miles});
  }
}
