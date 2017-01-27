import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, address: string, about: string, image: string, miles) {
    if(name === "") {
      return alert("Please enter a name.");
    }
    if(address === "") {
      return alert("Please enter an address.");
    }
    if(miles === NaN || miles === "") {
      return alert("Please enter miles hiked.");
    }
    var newMember: Member = new Member(name, address, about, image, parseInt(miles));
    this.memberService.addMember(newMember);
  }
}
